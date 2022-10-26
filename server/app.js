const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodedb'
})

async function main(){
    try{
        let conn = await pool.getConnection();
    }catch(err){

    }
}