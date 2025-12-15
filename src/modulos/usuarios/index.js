const db = require('../../db/mysql.js');
const ctrl = require('./controlador.js');

module.exports = ctrl(db);