const uuidv1 = require('uuid/v1');

const error = require("../errors/errors");
const { Contests } = require('../models/index');

const { CONTEST_PRICE } = require('../utils/consts');

const convertMapToObject = require('../utils/convertMapToObject');

const {
    ABILITY: { SUBJECT, ACTIONS },
} = require("../utils/consts");


module.exports.createContest = async (req, res, next) => {
    const { contests, files } = req.body;
    const { accessToken } = req;
    const uuid = uuidv1();


    contests.forEach( contest => {
       contest.contestId = uuid;
       contest.userId = accessToken.id;

       if(contest.files){
           contest.files = files[contest.files]
       }
    });

    try{
        //console.log('contests', contests);

        const createdContest = await Contests.bulkCreate(
            contests,
            {
                /*validate: true,*/
                returning: true
            }
        );

        //console.log('createdContest', createdContest);

        res.send('OK')

    }catch (err) {
        next(new error.NotFound(err.name))
    }
};

module.exports.sendPriceToContests =  (req, res, next) => {
    const price = convertMapToObject(CONTEST_PRICE);        //Object.fromEntries(CONTEST_PRICE.entries());

    if(price){
        res.send(price)
    }else{
        next( new error.NotFound())
    }
};


