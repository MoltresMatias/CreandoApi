const defaultDb = require('../../db/mysql.js');

const TABLA = 'clientes';

module.exports = function (dbInyectada = defaultDb) {
    function todos() {
        return dbInyectada.todos(TABLA);
    }

    function uno(id) {
        return dbInyectada.uno(TABLA, id);
    }

    function agregar(body) {
        return dbInyectada.agregar(TABLA, body);
    }

    function eliminar(body) {
        return dbInyectada.eliminar(TABLA, body);
    }

    return {
        todos,
        uno,
        agregar,
        eliminar,
    };
};