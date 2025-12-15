const express = require('express');
const config = require('./config');
const morgan = require('morgan');

const clientes = require('./modulos/clientes/rutas');
const usuarios = require('./modulos/usuarios/rutas');
const error = require('./red/errors');


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuraciones
app.set('port', config.app.port)

//Rutas
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use(error)

module.exports = app;