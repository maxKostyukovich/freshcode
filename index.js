const express = require('express');
const bodyParser = require('body-parser')
const router = require('./router');
const constants = require('./constants');
require('./db/mongoose');

const app = express();

app.use(express.json());

app.use(router);
app.use((err,req,res,next)=>{
    res.send(err.message);
    /*if(!err.code){
        res.status(500).json(err);
    } else{
        res.status(500).json(err);
    }*/
});

app.listen(constants.PORT,()=>console.log("Port 3005"));
