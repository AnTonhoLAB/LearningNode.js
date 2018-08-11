'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: "Learning Node",
        version: "0.0.9"
    });
});

module.exports = router;

