const { Forbidden } = require("../../errors/errors");

module.exports = (req,res,next) => {
    const { isBanned } = req.body.user;
    try{
        if(isBanned){
            return next(new Forbidden());
        }else{
            return next()
        }
    }catch (err) {
        next(err);
    }
};




