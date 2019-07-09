const mongoose = require('mongoose');
const constants = require('../constants');
const Schema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    gender:{
        type: String,
        enum: constants.GENDER,
        required: true
    },
    role:{
        type: String,
        enum: constants.ROLES,
        default: constants.ROLES[1]
    }

});

const User = mongoose.model('User',Schema);
module.exports = User;
