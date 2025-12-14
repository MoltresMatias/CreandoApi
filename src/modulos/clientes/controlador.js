const db = require('../../db/mysql.js');

const TABLA = 'clientes';

function todos() {
    return db.todos(TABLA);
}


module.exports = {
    todos,
};