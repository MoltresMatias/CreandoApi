require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },

    jwt: {
        secret: process.env.JWT_SECRET || 'clave_secreta',
    },
    mysql: {
        host: process.env.MYSQLHOST,      // Railway inyecta esta variable
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
        port: process.env.MYSQLPORT,
    }

}