const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const constants = require('./constants');
const cors = require('cors');
const ApplicationError = require('./errorHandler/ApplicationError');
require('./db/mongoose');


const app = express();
app.use(cors());

app.use(express.json());
app.use(router);
app.use((err,req,res,next)=>{
    if(err instanceof ApplicationError) {
        res.status(err.status).send(err.message);
    } else {
        res.status(500).send(err.message);
    }
});

app.listen(constants.PORT,()=>console.log("Port "+constants.PORT));
