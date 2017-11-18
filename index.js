const express = require('express');

const config = require('./config');
const app = express();


app.get('/', (req, res) => {
    res.send({message: 'Hello bogota.js'})
})

app.listen(config.port, () => {
    console.log('server runing in port', config.port)
})
