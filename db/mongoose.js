const mongoose = require('mongoose');
require('../models/user.model');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true},(err)=>{
    if(err){
        process.exit(1);
    }else {
        console.log("Db Norm!")
    }
});
mongoose.set('debug',true);
module.exports = mongoose;