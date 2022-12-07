const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1306',
    database: 'nodedb2'
})

async function main(){
    try{
        let conn = await pool.getConnection();
    }catch(err){

    }
}