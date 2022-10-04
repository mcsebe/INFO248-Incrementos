const connection = require('../db');
const servicios2 = require('./HistorialModel')
const sHistorial = new servicios2.historialServicios();


class metasServicios{

    async getMetas(res) {
        const TASK_QUERY = "select * from metas ORDER BY Aprobado"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createMetas(res,req) {
        const D = Math.random().toString(36).substr(2,18);
        const ADD_QUERY = `insert into metas values ('${D}','${req.body.idindicador}','${req.body.fecha}', ${req.body.cantidad}, 'Añadir', 0, 0);`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addmetas')
        })
    }

    async setAprobado(res,id) {
    
        const myArray = id.split("_");
        id = myArray[0];
        const solicitud = myArray[1];
        const now = myArray[2];

        const UPDATE_QUERY = `UPDATE metas SET Aprobado = 1 WHERE id = "${id}";`
        connection.query(UPDATE_QUERY, (err) =>{
            if(err) console.log(err)
        })

        if(solicitud === 'Añadir'){
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 2, solicitud: 'Añadir', estado: 'Aprobado', fecha: now }} );
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 2, solicitud: 'Eliminar', estado: 'Rechazado', fecha: now }} );  
        }
    }
    

    async setPeticion(res,id) {
        const myArray = id.split("-");
        id = myArray[0];
        const fecha = myArray[1];

        const ADD_QUERY = `UPDATE metas SET Peticion = 'Eliminar', Aprobado = 0 WHERE idindicador = "${id}" AND fecha = "${fecha}";`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }

    async deleteMetas(res, id){
        const myArray = id.split("_");
        id = myArray[0];
        const solicitud = myArray[1];
        const now = myArray[2];

        const D = Math.random().toString(36).substr(2,18);

        const ADD_QUERY = `UPDATE metas SET antiguaid = idindicador, idindicador ='${D}',Aprobado = 2 WHERE id = '${id}' ;`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })

        sHistorial.setHistorial(0,{body: { D: `${id}`, id: `${id}`, tipo: 2}} ); 

        if(solicitud === 'Eliminar'){
            sHistorial.createHistorial(0,{body: { id_imm: `${id}`, tipo: 2, solicitud: 'Eliminar', estado: 'Aprobado', fecha: now }} ); 
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: `${id}`, tipo: 2, solicitud: 'Añadir', estado: 'Rechazado', fecha: now }} );   
        }

    }

    async deleteMetasIndicador(res, req){
        const D = Math.random().toString(36).substr(2,18);

        const ADD_QUERY = `UPDATE metas SET idindicador ='${D}',Aprobado = 2, antiguaid = '${req.body.D}' WHERE idindicador = '${req.body.id}' OR antiguaid = '${req.body.id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })

    }
}

module.exports = {
    metasServicios
};