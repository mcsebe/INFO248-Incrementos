const connection = require('../db');
const servicios = require('./HistorialModel')
const sHistorial = new servicios.historialServicios();
const servicios2 = require('../models/MetasModel');
const sMetas = new servicios2.metasServicios();


class indicadoresServicios{

    async getIndicadores(res) {
        const TASK_QUERY = "select * from indicadores ORDER BY Aprobado"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }

    async createIndicador(res,req) {
        const ADD_QUERY = `insert into indicadores values ('${req.body.id}','${req.body.CalificacionCORFO}','${req.body.NumeroIndicador}','${req.body.MisionUniversitaria}','${req.body.nombre}','${req.body.TipoIndicador}',${req.body.eje},'${req.body.Unidad}','${req.body.FuenteInformacion}', '${req.body.Responsable}', '${req.body.Frecuencia}', 0, 'Añadir',0,null, '${req.body.Descripcion}', 0)`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
            else res.send('addindicadores')
        })
    }


    async setAprobado(res,id) {
        const myArray = id.split("_");
        id = myArray[0];
        const solicitud = myArray[1];
        const now = myArray[2];

        const UPDATE_QUERY = `UPDATE indicadores SET Aprobado = 1 WHERE id = "${id}";`
        connection.query(UPDATE_QUERY, (err) =>{
            if(err) console.log(err)
        })

        if(solicitud === 'Añadir'){
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 1, solicitud: 'Añadir', estado: 'Aprobado', fecha: now }} );
        }else{
            if(solicitud === 'Eliminar'){
            sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 1, solicitud: 'Eliminar', estado: 'Rechazado', fecha: now }} );  
            }else{
                sHistorial.createHistorial(0,{body: { id_imm: id, tipo: 1, solicitud: 'Editar', estado: 'Aprobado', fecha: now }} );
            }
        }
    }

    async setPeticion(res,id) {
        const ADD_QUERY = `UPDATE indicadores SET Peticion = 'Eliminar', Aprobado = 0 WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })   
    }
    async editarIndicador(res,req) {
        const ADD_QUERY = `INSERT INTO indicadores VALUES("${req.body.idAux} E","${req.body.CalificacionCORFO}", "${req.body.NumeroIndicador}","${req.body.MisionUniversitaria}","${req.body.nombre}","${req.body.TipoIndicador}","${req.body.eje}","${req.body.Unidad}","${req.body.FuenteInformacion}","${req.body.Responsable}","${req.body.Frecuencia}","${req.body.Aprobado}","${req.body.Peticion}","${req.body.antiguaid}","${req.body.id}","${req.body.Descripcion}", 0);`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })

        const ADD_QUERY2 = `UPDATE indicadores SET editando = 1 WHERE id = '${req.body.id}';`
        connection.query(ADD_QUERY2, (err) =>{
            if(err) console.log(err)
        })  
    }

    async eliminarIndicadorEditado(res,id){
        const myArray = id.split("_");
        const ideliminar = myArray[0];
        const idantigua = myArray[1];
        const now = myArray[2];
        const ADD_QUERY = `DELETE FROM indicadores WHERE id = "${ideliminar}";`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })
        const ADD_QUERY2 = `UPDATE indicadores SET editando = 0 WHERE id = '${idantigua}';`
        connection.query(ADD_QUERY2, (err) =>{
            if(err) console.log(err)
        })
        sHistorial.createHistorial(0,{body: { id_imm: idantigua, tipo: 1, solicitud: 'Editar', estado: 'Rechazado', fecha: now }} );
    }

    async eliminarIndicador(res,id){
        const myArray = id.split("_");
        const ideliminar = myArray[0];
        const idnueva = myArray[1];
        const now = myArray[2];
        const ADD_QUERY = `DELETE FROM indicadores WHERE id = "${ideliminar}";`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })
        sHistorial.setHistorial(0,{body: { D: idnueva.slice(0,-2), id: ideliminar, tipo: 1}} );
        sMetas.cambiarMetasIndicador(0,{body: { idnueva: idnueva.slice(0,-2), ideliminar: ideliminar}} ); 

        const UPDATE_QUERY = `UPDATE indicadores SET Aprobado = 1, id = "${idnueva.slice(0,-2)}"  WHERE id = "${idnueva}";`
        connection.query(UPDATE_QUERY, (err) =>{
            if(err) console.log(err)
        })

        sHistorial.createHistorial(0,{body: { id_imm: idnueva.slice(0,-2), tipo: 1, solicitud: 'Editar', estado: 'Aprobado', fecha: now }} );

    }

    async deleteIndicador(res, id){
        const myArray = id.split("_");
        id = myArray[0];
        const solicitud = myArray[1];
        const now = myArray[2];

        const D = Math.random().toString(36).substr(2,18);

        sMetas.deleteMetasIndicador(0,{body: { id: `${id}`, D: `${D}`}} ); 

        const ADD_QUERY = `UPDATE indicadores SET id ='${D}',Aprobado = 2, antiguaid = '${id}' WHERE id = '${id}';`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })

        sHistorial.setHistorial(0,{body: { D: D, id: id, tipo: 1}} ); 

        if(solicitud === 'Eliminar'){
            sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Eliminar', estado: 'Aprobado', fecha: now }} ); 
        }else{
            sHistorial.createHistorial(0,{body: { id_imm: `${D}`, tipo: 1, solicitud: 'Añadir', estado: 'Rechazado', fecha: now }} );   
        }

    }

}

module.exports = {
    indicadoresServicios
};