const express = require('express');
const bearerToken = require('express-bearer-token');

const userController = require('../controllers/userController');

const createAndSaveToken = require('../middlewares/createAndSaveToken');

const checkPasswordAndCountOfTokens = require("../middlewares/checkPasswordAndCountOfTokens");

const updateRefreshToken = require('../middlewares/updateRefreshToken');
const deleteTokenPair = require('../middlewares/deleteTokenPair');

const router = express.Router();

router.use(bearerToken());

router.use(['/user','/login'], (req, res, next) => {
    console.log('---- req.method ---- ', req.method);
    console.log('---- req.baseUrl ---- ', req.baseUrl);
    // req.method = "POST"  && req.baseUrl = "/login" || req.originalUrl = "/login" || req.Url.path = "/login"
    next();
});

// ---------- User ----------
router.post('/user', userController.createUser, createAndSaveToken );

router.get('/user', userController.giveAccessUser);

router.post('/login', userController.loginUser, checkPasswordAndCountOfTokens, createAndSaveToken );

router.delete('/logout', deleteTokenPair);



// ---------- Admin ----------
router.get('/alluser', userController.getAllUsers);
router.put('/user/:id', userController.updateUserById);




// tokenController
router.post('/refresh', userController.refreshUser, updateRefreshToken);

module.exports = router;
