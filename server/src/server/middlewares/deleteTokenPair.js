const { RefreshToken } = require('../models/index');
const { verifyToken } = require('../utils/checkJwtTokens');

const { TOKEN } = require("../utils/consts")

module.exports = async (req, res, next) => {
    const {refreshToken} = req.body;
    try{
        const decoded = await verifyToken(refreshToken, TOKEN.REFRESH);
        if(decoded){
            await RefreshToken.destroy({where: {tokenString: refreshToken}});
            res.send(refreshToken);
        }
    }catch (err) {
        next(err)
    }
};
