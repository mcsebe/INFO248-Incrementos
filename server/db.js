const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '146.83.216.224',
    user: 'root',
    password: '123456789',
    database: 'nodedb',
    port:  '3307'

})

module.exports = connection;