const db = require('../../db/mysql.js');
const auth = require('../../auth');
const bcrypt = require('bcrypt');

const TABLA = 'auth';

module.exports = function (dbInyetada) {
    let db = dbInyetada;
    if (!db) {
        db = require('../../db/mysql.js');
    }

    async function login(usuario, password) {
        const data = await db.query(TABLA, { usuario: usuario });

        return bcrypt.compare(password.toString(), data.password)
            .then(resultado => {
                if (resultado === true) {
                    return auth.asignarToken({ ...data });
                } else {
                    throw new Error('Información inválida');
                }
            })
    }

    async function agregar(data) {
        const authData = {
            id: data.id,
        }

        if (data.usuario) {
            authData.usuario = data.usuario;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password.toString(), 5);
        }

        return db.agregar(TABLA, authData);
    }

    async function eliminar(id) {
        // Hard delete en auth (no tiene sentido conservar credenciales)
        return db.eliminar(TABLA, { id: id });
    }

    return {
        agregar,
        login,
        eliminar
    };
};