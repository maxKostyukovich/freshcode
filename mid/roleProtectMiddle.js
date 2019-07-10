const Access = require('../rules/role_rule');
const User = require('../models/user.model');
const NoPermissionError = require('../errorHandler/NoPermissionError');
const mongoose = require('mongoose');

function checkSelfAccess (selfRole,action){
    return Access.get(selfRole).get(action).toSelf;
 }

function checkOtherAccess (selfRole,userRole,action){
    return Access.get(selfRole).get(action).toOthers.includes(userRole);
}

module.exports.accessToReadUpdateDelete =  (action) => {
     return  async (req,res,next) => {
    const user  =  await User.findById(req.params.id);

    if((req.headers._id === user._id.toString())?checkSelfAccess(req.headers.role,action):checkOtherAccess(req.headers.role,user.role,action)){
            next();

        } else {
        next(new NoPermissionError());
    }
    }
 };
 module.exports.accessToCreate =  (action) => {
     return (req, res, next) => {
         if (checkSelfAccess(req.headers.role,action)){
             next();
             } else {
             next(new NoPermissionError());
         }
    }
 };
