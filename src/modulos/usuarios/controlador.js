const db = require('../../db/mysql.js');
const auth = require('../auth');

const TABLA = 'usuarios';

module.exports = function (dbInyetada) {
    let db = dbInyetada;
    if (!db) {
        db = require('../../db/mysql.js');
    }

    function todos() {
        // Solo devuelve usuarios activos
        return db.query(TABLA, { activo: 1 });
    }

    function uno(id) {
        return db.uno(TABLA, id);
    }

    async function agregar(body) {
        const usuario = {
            id: body.id,
            nombre: body.nombre,
            activo: body.activo ?? 1, // por defecto activo
        }

        const respuesta = await db.agregar(TABLA, usuario);
        console.log("respuesta", respuesta);

        var insertId = 0;
        if (body.id == 0) {
            insertId = respuesta.insertId;
        } else {
            insertId = body.id;
        }

        var respuesta2 = '';
        if (body.usuario || body.password) {
            respuesta2 = await auth.agregar({
                id: insertId,
                usuario: body.usuario,
                password: body.password,
            })
        }
        return respuesta2;
    }

    async function eliminar(body) {
        // Primero borro credenciales en auth
        await auth.eliminar(body.id);

        // Luego hago soft delete en usuarios
        return db.actualizar(TABLA, { activo: 0 }, body.id);
    }

    return {
        todos,
        uno,
        eliminar,
        agregar,
    };
};