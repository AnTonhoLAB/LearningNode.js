'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next)=>{
    if (req.body.message == "oi") {
        res.status(201).send({"response": "Oi, tudo bem??"});    
    }else{

        res.status(201).send({"response": "MALEDUCADO"});
    }
});

router.put('/:id', (req, res, next)=>{
    const id = req.params.id
    
    res.status(201).send({
        id: id,
        item: req.body
    });
});

router.delete('/:id', (req, res, next)=>{
    const id = req.params.id
    
    res.status(200).send({
        id: id,
        item: req.body
    });
});

module.exports = router;