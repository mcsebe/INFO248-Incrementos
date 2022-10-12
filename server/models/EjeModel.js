const connection = require('../db');

class ejeServicios{

    async getEje(res) {
        const TASK_QUERY = "select * from ejes ORDER BY id"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }
}

module.exports = {
    ejeServicios
};