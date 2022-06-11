const connection = require('../db');

class metricasServicios{

    async getMetricas(res) {
        const TASK_QUERY = "select * from metricas"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createMetricas(res,req) {
        const ADD_QUERY = `insert into metricas values ('${req.body.id}','${req.body.nombre}');`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addmetricas')
        })
    }

    async deleteMetricas(res, id){
        const DELETE_QUERY = `DELETE FROM metricas where (id = '${id}')`
        connection.query(DELETE_QUERY, (err, res) =>{
            if(err) console.log(err)
        })
    }
}

module.exports = {
    metricasServicios
};