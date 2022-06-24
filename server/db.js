const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '0.0.0.0:3307',
    user: 'prueba01',
    password: '123456789',
    database: 'indicadores'
})

module.exports = connection;