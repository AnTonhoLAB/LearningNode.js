'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const route = router.get('/', (requestAnimationFrame, res, next)=>{
    res.status(200).send({
        title: "Node Store Api",
        version: "0.0.1"
    });
});

const routeVersion = router.get('/', (req, res, next)=>{
   
    res.status(200).send({
        title: "Learning Node",
        version: "0.0.9"
    });
});

const create = router.post('/', (req, res, next)=>{
    if (req.body.name == "oi") {
        res.status(201).send({"response": "Oi, tudo bem??"});    
    }else{

        res.status(201).send({"response": "MALEDUCADO"});
    }
});

const put = router.put('/:id', (req, res, next)=>{
    const id = req.params.id
    
    res.status(201).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/:id', (req, res, next)=>{
    const id = req.params.id
    
    res.status(200).send({
        id: id,
        item: req.body
    });
});

app.use('/', route);
app.use('/version', routeVersion);

app.use('/user', create);
app.use('/user',put);
app.use('/user', del);


module.exports = app;