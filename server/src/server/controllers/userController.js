const error = require("../errors/errors");
const { User, RefreshToken } = require('../models/index');

const bcrypt = require('bcrypt');
const { SALT_ROUNDS, TOKEN, ABILITY: {SUBJECT, ACTIONS} } = require("../utils/consts");

const { verifyToken } = require('../utils/checkJwtTokens');

const { AuthenticationTimeout, InvalidCredentials, NotFound } = require("../errors/errors");

const {jwtSignAccess, jwtSignRefresh } = require('../utils/checkJwtTokens');




// ------------------------ User ------------------------

module.exports.createUser = async (req, res, next) => {
    const body = Object.assign({},req.body);
    try{
        req.ability.throwUnlessCan(ACTIONS.CREATE, SUBJECT.USER);               // CASL

        const hash = await bcrypt.hash(body.password, SALT_ROUNDS);
        const [user, created] = await User.findOrCreate({
            where: {email: body.email},
            defaults: {
                firstName: body.firstName,
                lastName: body.lastName,
                displayName: body.displayName,
                email: body.email,
                role: body.role,
                password: hash
            },
        });
        if (!created) return next(new error.InvalidCredentials());

        req.body.user = user.get({plain:true});
        next();
    }catch (err){

        next(err)
    }
};

module.exports.loginUser = async (req,res,next) => {
    const {email , password} = req.body;
    try{
        const foundUser = await User.findOne({
            where: {email: email},
            raw: true,
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            },
        });
        if(!foundUser){
            return next(new error.NotFound());
        }
        if(foundUser.isBanned){
            return next(new error.Forbidden());
        }

        req.body.user = foundUser;
        req.body.password = password;
        next()
    }catch (err) {
        next(err);
    }
};

module.exports.checkAndUpdateRefreshToken = async (req,res,next) => {
    const { refreshToken } = req.body;
    try{
        const decoded = await verifyToken(refreshToken, TOKEN.REFRESH);

        const user = await User.findByPk( decoded.userId, {
            attributes: {
                exclude: ['updatedAt', 'createdAt', 'password']
            }
        });

        let tokenPair = {
            accessToken: await jwtSignAccess(user.email, user.firstName, user.role, user.id),
            refreshToken: await jwtSignRefresh(user.id, user.role)
        };

        await RefreshToken.update(
            { tokenString: tokenPair.refreshToken },
            { where:  {userId: user.id} }
        );

        return res.send({
            user,
            tokenPair,
        });
    }catch (err) {
        if(err.name === 'TokenExpiredError'){
            return next(new InvalidCredentials(err.name));
        }
        next(err)
    }
};

module.exports.giveAccessUser = async (req,res,next) => {
    try{
        const decoded = req.accessToken;
        const user = await User.findOne({
            where: {email: decoded.email},
            attributes: {
                exclude: ['password','updatedAt', 'createdAt']
            }
        });


        if(req.ability.cannot(ACTIONS.READ, user)){
            return next(new error.Forbidden());
        }
        //req.ability.throwUnlessCan('read', user);

        return res.send(user);
    }catch (err) {
        if(err.name === 'TokenExpiredError'){
            return next(new AuthenticationTimeout(err.name));
        }
        next(err)
    }
};


// ------------------------ Admin ------------------------

module.exports.getAllUsers = async (req, res, next) => {
    try{
        req.ability.throwUnlessCan(ACTIONS.READ, SUBJECT.ALL);                      // CASL

        const users = await User.findAll({
            raw: true,
            rejectOnEmpty: true,
            attributes: {
                exclude: ['password','updatedAt', 'createdAt']
            },
            order: [['email', 'ASC'], ['id', 'ASC']]
        });
        res.send(users);
    }catch (err) {
        next(new NotFound(err.name))
    }
};

module.exports.updateUserById = async (req, res, next) => {
    const { id } = req.params;
    const { isBanned } = req.body;
    try {
        const user = await User.findByPk(id, {
            attributes: {
                exclude: ['password','updatedAt', 'createdAt', 'isActive', 'isBanned']
            },
        });

        if(req.ability.cannot(ACTIONS.UPDATE, user)){
            return next(new error.Forbidden());
        }
        //req.ability.throwUnlessCan('update', user);                                     // CASL

        const [numberOfUpdatedRows, updateUser] = await User.update({ isBanned }, {
            where: { id },
            fields: ['isBanned'],
            returning: true,
            plain: true,
        });

        if(numberOfUpdatedRows <= 0){
            return next(new error.NotFound());
        }

        return res.send(updateUser);
    } catch (err) {
        next(err);
    }
};