const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '146.83.216.224',
    user: 'root',
    password: '123456789',
    database: 'indicadores',
    port:  '3307'
})

async function main(){
    try{
        let conn = await pool.getConnection();
    }catch(err){

    }
}