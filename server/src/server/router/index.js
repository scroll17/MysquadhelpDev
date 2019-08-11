const express = require('express');

const userController = require('../controllers/userController');

const createAndSaveToken = require('../middlewares/createAndSaveToken');
const refreshValidationToken = require("../middlewares/refreshValidationToken");

const updateRefreshToken = require('../middlewares/updateRefreshToken');
const deleteTokenPair = require('../middlewares/deleteTokenPair');

const router = express.Router();

router.post('/user', userController.createUser, createAndSaveToken );

router.post('/login', userController.loginUser, refreshValidationToken, createAndSaveToken );
router.delete('/logout',  deleteTokenPair);

router.post('/refresh', userController.refreshUser, updateRefreshToken);

module.exports = router;
