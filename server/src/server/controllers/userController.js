const error = require("../errors/errors");
const { User } = require('../models/index');

const bcrypt = require('bcrypt');
const { SALT_RONDS } = require("../utils/consts");

const { verifyToken } = require('../utils/jwtTokenVerify');

module.exports.createUser = async (req, res, next) => {
    const body = Object.assign({},req.body);
    try{
        const hash = await bcrypt.hash(body.password, SALT_RONDS);
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
            attributes: {
                exclude: ['password', 'updatedAt', 'createdAt']
            }
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
