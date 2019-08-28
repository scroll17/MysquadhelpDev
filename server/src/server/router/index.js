import express from 'express';

const bearerToken = require('express-bearer-token');
const defineAbilities = require('../middlewares/defineAbilities');


import authorizationRouter from './authorizationRouter';
import userRouter from './userRouter';
import contestRouter from './contestRouter';


const router = express.Router();

router.use(bearerToken());
router.use(defineAbilities);


router.use(
    authorizationRouter,
    userRouter,
    contestRouter
);


module.exports = router;

