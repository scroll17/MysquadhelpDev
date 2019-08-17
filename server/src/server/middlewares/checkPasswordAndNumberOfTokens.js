const { RefreshToken: CheckPasswordAndNumberOfTokens } = require('../models/index');
const bcrypt = require('bcrypt');
const { InvalidCredentials } = require("../errors/errors");

module.exports = async (req, res, next) => {
    const { password, user } = req.body;
    try{
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) return next(new InvalidCredentials());

        const count = await CheckPasswordAndNumberOfTokens.count({where: {userId: user.id}});
        if(count >= 3) await CheckPasswordAndNumberOfTokens.destroy({where: {userId: user.id}});

        next();
    }catch (err) {
        next(err)
    }
};
