const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '172.17.0.4',
    user: 'prueba01',
    password: '123456789',
    database: 'indicadores',
    port:  '3306'
})

module.exports = connection;