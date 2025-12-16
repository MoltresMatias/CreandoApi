
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const error = require('../middleware/errors.js').error;

const secret = config.jwt.secret;


function asignarToken(data) {
    return jwt.sign(data, secret);
}

function verificarToken(token) {
    return jwt.verify(token, secret);
}

const checkToken = {
    confirmarToken: function (req, id) {
        const decodificar = decodificarCabecera(req);
        if (decodificar.id !== id) {
            throw error('No tienes permisos para realizar esta accion', 401);
        }
    }
}

function obtenerToken(autorizacion) {
    if (!autorizacion) {
        throw error('No viene token', 401);
    }

    if (autorizacion.indexOf('Bearer ') === -1) {
        throw error('Formato invalido', 401);
    }
    let token = autorizacion.replace('Bearer ', '');
    return token;
}

function decodificarCabecera(req) {
    const autorizacion = req.headers.authorization || '';
    const token = obtenerToken(autorizacion);
    const decodificar = verificarToken(token);

    req.user = decodificar;
    return decodificar;
}

module.exports = {
    asignarToken,
    checkToken
};