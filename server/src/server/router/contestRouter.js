const express = require('express');

const {

} = require('../controllers/contestController');


const { URL: { API } } = require('../utils/consts');


const router = express.Router();

router.post(API.CONTEST,
    (req, res, next) => {
        console.log(API.CONTEST, req.body);
        res.send(200);
    }
);


module.exports = router;
