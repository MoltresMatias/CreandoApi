require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '1230',
        database: process.env.MYSQL_DATABASE || 'ejemplo',
        port: process.env.MYSQL_PORT || "3307",
    }
}