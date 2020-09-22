
const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

//crear el servidor express
const app = express();

// Base de datos
dbConnection();


// Rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: "hola que ace"
    });

})


app.listen(process.env.PORT, () =>{

})