const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '172.17.0.4',
    user: 'prueba01',
    password: '123456789',
    database: 'indicadores',
    port:  '3306'
})

async function main(){
    try{
        let conn = await pool.getConnection();
    }catch(err){

    }
}