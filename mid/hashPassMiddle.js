const bcrypt = require('bcrypt');

module.exports = (req,res,next) => {
    if(req.body.password){
        bcrypt.hash(req.body.password,10, (err,hash) => {
            if(!err) {
                req.body.password = hash;
                console.log(req.body.password);
                console.log(hash);
                next();
            } else {
                next(new Error ("Password is not hashed"));
            }
        })
    }
};