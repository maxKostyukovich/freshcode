const express=require('express');
const userController = require('../controllers/userController');
const validationMiddleware = require('../mid/validMiddle');
const isAuth = require('../mid/isAuthMiddle');
const router = express.Router();
const roleProtection = require('../mid/roleProtectMiddle');
const Constants = require('../constants');


router.get('/user', userController.getAllUsers);
router.get('/user/:id',isAuth,roleProtection.accessToReadUpdateDelete(Constants.ACTION.READ),userController.getUserById);
router.post("/user",isAuth,roleProtection.accessToCreate(Constants.ACTION.CREATE),validationMiddleware,userController.createUser);
router.put('/user/:id',isAuth,roleProtection.accessToReadUpdateDelete(Constants.ACTION.UPDATE),validationMiddleware,userController.updateUser);
router.delete('/user/:id',isAuth,roleProtection.accessToReadUpdateDelete(Constants.ACTION.DELETE),userController.deleteUser);
module.exports=router;