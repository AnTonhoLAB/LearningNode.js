'use strict';

const express = require('express');

const app = express();
const router = express.Router();

const route = router.get('/', (requestAnimationFrame, res, next)=>{
    res.status(200).send({
        title: "Node Store Api",
        version: "0.0.1"
    });
});

const routeVersion = router.get('/version', (requestAnimationFrame, res, next)=>{
    res.status(200).send({
        title: "Learning Node",
        version: "0.0.9"
    });
});

app.use('/', route);
app.use('/version', route);

module.exports = app;