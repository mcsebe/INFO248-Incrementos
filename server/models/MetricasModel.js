const connection = require('../db');
const servicios = require('../models/IndicadorModel')
const servicios2 = require('./HistorialModel')
const sHistorial = new servicios2.historialServicios();


class metricasServicios{

    async getMetricas(res) {
        const TASK_QUERY = "select * from metricas ORDER BY Aprobado"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createMetricas(res,req) {
        const ADD_QUERY = `insert into metricas values ('${req.body.id}','${req.body.nombre}', 'Añadir', 0, 0);`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addmetricas')
        })
    }

    async setAprobado(res,id) {

        const myArray = id.split("_");
        id = myArray[0];
        const solicitud = myArray[1];
        const now = myArray[2];

        const UPDATE_QUERY = `UPDATE metricas SET Aprobado = 1 WHERE id = "${id}";`
        connection.query(UPDATE_QUERY, (err) =>{
            if(err) console.log(err)
        })

        if(solicitud === 'Añadir'){
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 3, solicitud: 'Añadir', estado: 'Aprobado', fecha: now }} );
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 3, solicitud: 'Eliminar', estado: 'Rechazado', fecha: now }} );  
        }
    }


    async setPeticion(res,id) {
        const ADD_QUERY = `UPDATE metricas SET Peticion = 'Eliminar', Aprobado = 0 WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async deleteMetricas(res, id){
        const myArray = id.split("_");
        id = myArray[0];
        const solicitud = myArray[1];
        const now = myArray[2];
        const D = Math.random().toString(36).substr(2,18);

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

        const ADD_QUERY = `UPDATE metricas SET id ='${D}',Aprobado = 2, antiguaid = '${id}' WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   


        sHistorial.setHistorial(0,{body: { D: D, id: id, tipo: 3}} ); 

        if(solicitud === 'Eliminar'){
            sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 3, solicitud: 'Eliminar', estado: 'Aprobado', fecha: now }} ); 
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 3, solicitud: 'Añadir', estado: 'Rechazado', fecha: now }} );   
        }

    }
}

module.exports = {
    metricasServicios
};