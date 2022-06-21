const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'prueba01',
    password: '123456789',
    database: 'indicadores'
})

module.exports = connection;