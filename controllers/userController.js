const User = require('../models/user.model');
const EmailAlreadyExistsError = require('../errorHandler/EmailAlreadyExistsError');
const UserNotFoundError = require('../errorHandler/UserNotFoundError');
module.exports.createUser = (req,res,next)=>{
    const user = new User(req.body);
    user.save()
        .then(savedUser=>{
            res.send(savedUser);
    })
        .catch(err=>{
            if(err.code === 11000) {
                next(new EmailAlreadyExistsError())
            } else {
                next(err);
            }
        })
};

module.exports.deleteUser = (req,res,next)=>{
    User.deleteOne({_id:req.params.id})
        .then(deletedUser=>{
            if(!user) {
                throw new UserNotFoundError();
            }
            res.send(deletedUser);
        })
        .catch(err=>next(err))
};

module.exports.getAllUsers = (req,res,next) => {
    User.find({},(err,users) => {
        if(err) {
            res.send('something went wrong!');
            next();
        }
        res.json(users);
    });
};

module.exports.getUserById = (req,res,next)=>{
    User.findById(req.params.id)
        .then(user => {
            if(!user) {
                throw new UserNotFoundError();
            }
            res.send(user)
        })
        .catch(err => next(err));
};

module.exports.updateUser = (req,res,next) => {
    const conditions = {_id:req.params.id};

    User.update(conditions, req.body)
        .then(doc => {
        if(!doc) {
            res.status(404).end();
        } else{
            res.status(200).json(doc);
        }

        })
        .catch(err => next(err));
};