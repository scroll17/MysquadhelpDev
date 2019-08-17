const express = require('express');
const bearerToken = require('express-bearer-token');

const userController = require('../controllers/userController');

const createAndSaveToken = require('../middlewares/createAndSaveToken');

const checkPasswordAndNumberOfTokens = require("../middlewares/checkPasswordAndNumberOfTokens");

const updateRefreshToken = require('../middlewares/updateRefreshToken');
const deleteTokenPair = require('../middlewares/deleteTokenPair');

const router = express.Router();

router.use(bearerToken());

// ---------- User ----------
router.post('/user', userController.createUser, createAndSaveToken );

router.get('/user', userController.giveAccessUser);

router.post('/login', userController.loginUser, checkPasswordAndNumberOfTokens, createAndSaveToken );

router.delete('/logout', deleteTokenPair);



// ---------- Admin ----------
router.get('/alluser', userController.getAllUsers);
router.put('/user/:id', userController.updateUserById);




// tokenController
router.post('/refresh', userController.refreshUser, updateRefreshToken);

module.exports = router;
