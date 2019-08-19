const express = require('express');
const bearerToken = require('express-bearer-token');

const userController = require('../controllers/userController');

const createAndSaveToken = require('../middlewares/createAndSaveToken');
const checkPasswordAndCountOfTokens = require("../middlewares/checkPasswordAndCountOfTokens");
const deleteTokenPair = require('../middlewares/deleteTokenPair');

const defineAbilities = require('../middlewares/defineAbilities');

const { URL: { API } } = require('../utils/consts');

const router = express.Router();

router.use(bearerToken());
router.use(defineAbilities);


// ---------- User ----------
router.get(API.USER, userController.giveAccessUser);
router.post(API.USER, userController.createUser, createAndSaveToken );
router.post(API.LOGIN, userController.loginUser, checkPasswordAndCountOfTokens, createAndSaveToken );
router.delete(API.LOGOUT, deleteTokenPair);

router.post(API.REFRESH, userController.checkAndUpdateRefreshToken);

// ---------- Admin ----------
router.get(API.ALL_USER, userController.getAllUsers);
router.put(API.USER_ID, userController.updateUserById);


module.exports = router;
