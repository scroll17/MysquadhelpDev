const {jwtSignAccess, jwtSignRefresh } = require('../utils/checkJwtTokens');
const { RefreshToken } = require('../models/index');


module.exports = async (req, res, next) => {
    const { user } = Object.assign({},req);
    try{
        let tokenPair = {
            accessToken: await jwtSignAccess(user.email, user.firstName, user.role, user.id),
            refreshToken: await jwtSignRefresh(user.id, user.role)
        };

        await RefreshToken.update(
                { tokenString: tokenPair.refreshToken },
                { where:  {userId: user.id} }
            );

        return res.send({
            user: req.user,
            tokenPair,
        });
    }catch (err) {
        next(err)
    }

};
