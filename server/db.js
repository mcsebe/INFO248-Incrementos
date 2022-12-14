const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1306',
    database: 'innoving'
})

module.exports = connection;