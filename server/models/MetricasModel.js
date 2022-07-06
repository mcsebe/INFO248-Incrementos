const connection = require('../db');
const servicios = require('../models/IndicadorModel')

class metricasServicios{

    async getMetricas(res) {
        const TASK_QUERY = "select * from metricas"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createMetricas(res,req) {
        const ADD_QUERY = `insert into metricas values ('${req.body.id}','${req.body.nombre}', 'Añadir', 0);`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addmetricas')
        })
    }

    async setAprobado(res,id) {
        const ADD_QUERY = `UPDATE metricas SET Aprobado = 1 WHERE id = "${id}";`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })  

    }

    async setPeticion(res,id) {
        const ADD_QUERY = `UPDATE metricas SET Peticion = 'Eliminar', Aprobado = 0 WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async deleteMetricas(res, id){
        const sIndicadores = new servicios.indicadoresServicios();
        const DELETE_QUERY = `SELECT id FROM indicadores WHERE idMetrica = '${id}'`
        connection.query(DELETE_QUERY, (err, res) =>{
            if(err) console.log(err)
            else{
                var idIndicadores = res.map(function(x) {
                    return x.id;
                 });
                 sIndicadores.setMetricas(0,{body: { id: 0, idIndicadores: idIndicadores }} );
            }
        })

        const DELETE_QUERY2 = `DELETE FROM metricas where (id = '${id}')`
        connection.query(DELETE_QUERY2, (err, res) =>{
            if(err) console.log(err)
        })
    }
}

module.exports = {
    metricasServicios
};