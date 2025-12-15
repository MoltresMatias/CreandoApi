const respuesta = require('../red/respuestas');

function errors(err, req, res, next) {
    console.error('[Error]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    respuesta.error(req, res, message, status, next);
}

module.exports = errors;