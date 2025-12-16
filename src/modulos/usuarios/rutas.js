const express = require('express');
const seguridad = require('../usuarios/seguridad.js');
const respuesta = require('../../red/respuestas.js');
const controlador = require('./index.js');
const router = express.Router();


router.get('/', todos);
router.get('/:id', uno);
router.post('/', seguridad(), agregar);
router.put('/', seguridad(), eliminar)


async function todos(req, res, next) {
    try {
        const items = await controlador.todos()
        respuesta.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }

};

async function uno(req, res, next) {
    try {
        const items = await controlador.uno(req.params.id)
        respuesta.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }


};

async function agregar(req, res, next) {
    try {
        const items = await controlador.agregar(req.body)
        if (req.body.id == 0) {
            mensaje = 'item agregado satisfactoriamente'
        } else {
            mensaje = 'item modificado satisfactoriamente'
        }
        respuesta.success(req, res, mensaje, 201)
    } catch (err) {
        next(err);
    }


};

async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.body)
        respuesta.success(req, res, 'item eliminado satisfactoriamente', 200)
    } catch (err) {
        next(err);
    }


};

module.exports = router;