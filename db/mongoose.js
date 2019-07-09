const mongoose = require('mongoose');
require('../models/user.model');
const Constants = require('../constants');

mongoose.connect(Constants.DB_CON_STRING, {useNewUrlParser: true},(err)=>{
    if(err){
        process.exit(1);
    }else {
        console.log("Db Norm!")
    }
});
mongoose.set('debug',true);
module.exports = mongoose;