const mysql = require('mysql2');
const config = require('../config');


const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port,
};

let conexion;

function conMysql() {
    conexion = mysql.createConnection(dbConfig);

    conexion.connect((err) => {
        if (err) {
            console.log('[Error de conexion]', err);
            setTimeout(conMysql, 200);
        } else {
            console.log('Base de datos conectada');
        }
    });

    conexion.on('error', (err) => {
        console.log('[Error de conexion]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql();
        } else {
            throw err;
        }
    });

};

conMysql();

function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}


function uno(tabla, id) {

}

function agregar(tabla, data) {

}

function eliminar(tabla, id) {

}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
}