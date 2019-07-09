const express=require('express');
const userController = require('../controllers/userController');
const validationMiddleware = require('../mid/validMiddle');
const router = express.Router();

router.get('/user',userController.getAllUsers);
router.get('/user/:id',userController.getUserById);
router.post("/user",validationMiddleware,userController.createUser);
router.put('/user/:id',validationMiddleware,userController.updateUser);
router.delete('/user/:id',userController.deleteUser);
module.exports=router;