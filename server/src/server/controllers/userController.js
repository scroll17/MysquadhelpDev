const error = require("../errors/errors");
const { User } = require('../models/index');

const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require("../utils/consts");

const { verifyToken } = require('../utils/checkJwtTokens');

const { AuthenticationTimeout, InvalidCredentials, NotFound } = require("../errors/errors");


                                        // ---------- User ----------

module.exports.createUser = async (req, res, next) => {
    const body = Object.assign({},req.body);
    try{
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
        if(!foundUser) return next(new error.NotFound());
        if(foundUser.isBanned) return next(new error.Forbidden());

        req.body.user = foundUser;
        req.body.password = password;
        next()
    }catch (err) {
        next(err);
    }
};

module.exports.refreshUser = async (req,res,next) => {
    const { refreshToken } = req.body;
    try{
        const decoded = await verifyToken(refreshToken, "R");

        req.user = await User.findByPk( decoded.userId, {
            attributes: {
                exclude: ['updatedAt', 'createdAt', 'password']
            }
        });
        next()
    }catch (err) {
        if(err.name === 'TokenExpiredError') return next(new InvalidCredentials(err.name));
        next(err)
    }
};

module.exports.giveAccessUser = async (req,res,next) => {
    const accessToken = req.token;
    try{
        const decoded = await verifyToken(accessToken, 'A');
        const user = await User.findOne({
            where: {email: decoded.email},
            attributes: {
                exclude: ['password','updatedAt', 'createdAt']
            }
        });
        return res.send(user);
    }catch (err) {
        if(err.name === 'TokenExpiredError') return next(new AuthenticationTimeout(err.name));
        next(err)
    }
};


                                        // ---------- Admin ----------

module.exports.getAllUsers = async (req, res, next) => {
    try{
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
        return next(new NotFound(err.name))
    }
};

module.exports.updateUserById = async (req, res, next) => {
    const { id } = req.params;
    const { isBanned } = req.body;
    try {
        const [numberOfUpdatedRows, user] = await User.update({ isBanned }, {
            where: { id },
            fields: ['isBanned'],
            returning: true,
            plain: true,
        });

        if(numberOfUpdatedRows <= 0){
            return next(new error.NotFound());
        }

        return res.send(user);
    } catch (err) {
        next(err);
    }
};