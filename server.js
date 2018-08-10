'use strict'

const http = require('http');
const debg = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
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

server.listen(port);
server.on('error', onError)

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port>=0){
        return port;
    }

    return false 
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string'? 'pipe ' + port : 'port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privilages ');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind+ ' - is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}