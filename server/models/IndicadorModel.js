const connection = require('../db');

class indicadoresServicios{

    async getIndicadores(res) {
        const TASK_QUERY = "select * from indicadores"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createIndicador(res,req) {
        const ADD_QUERY = `insert into indicadores values ('${req.body.id}','${req.body.CalificacionCORFO}','${req.body.NumeroIndicador}','${req.body.MisionUniversitaria}','${req.body.nombre}','${req.body.TipoIndicador}','${req.body.eje}','${req.body.Unidad}','${req.body.FuenteInformacion}', '${req.body.Responsable}', '${req.body.Frecuencia}', 0, 'Añadir', ${req.body.idMetrica}, ${req.body.idMeta})`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addindicadores')
        })
    }

    async setMetricas(res,req) {
        for(let i=0; i < req.body.idIndicadores.length ; i++){ 
            const ADD_QUERY = `UPDATE indicadores SET idMetrica = ${req.body.id} WHERE id = "${req.body.idIndicadores[i]}";`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log(err)
            })   
        }
    }

    async setMetas(res,req) {
        for(let i=0; i < req.body.idIndicadores.length ; i++){ 
            const ADD_QUERY = `UPDATE indicadores SET idMeta = ${req.body.id} WHERE id = "${req.body.idIndicadores[i]}";`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log(err)
            })   
        }
    }

    async setAprobado(res,id) {
        const ADD_QUERY = `UPDATE indicadores SET Aprobado = 1 WHERE id = "${id}";`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async setPeticion(res,id) {
        const ADD_QUERY = `UPDATE indicadores SET Peticion = 'Eliminar', Aprobado = 0 WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async deleteIndicador(res, id){
        const DELETE_QUERY = `DELETE FROM indicadores WHERE id = "${id}";`
        connection.query(DELETE_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }
}

module.exports = {
    indicadoresServicios
};