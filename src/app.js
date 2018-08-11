'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Load routes
const index = require('./routes/index');
const user = require('./routes/User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



const routeVersion = router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: "Learning Node",
        version: "0.0.9"
    });
});



app.use('/', index);
app.use('/user', user);

module.exports = app;