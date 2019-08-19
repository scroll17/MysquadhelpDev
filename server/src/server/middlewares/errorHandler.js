module.exports = (err,req,res,next) =>{
    if(!err.status)
        res.status(500).json(err);
    else {
        res.status(err.status).send( { statusText:err.message } )
    }
};
