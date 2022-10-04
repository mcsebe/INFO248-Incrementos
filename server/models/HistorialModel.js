const connection = require('../db');

class historialServicios{

    async getHistorialPeticiones(res) {
        const TASK_QUERY = "select * from historialpeticiones ORDER BY fecha DESC"
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose)
        })
    }
    async createHistorial(res,req) {
        const id = Math.random().toString(36).substr(2,18);
        const ADD_QUERY = `insert into historialpeticiones values ('${id}', '${req.body.id_imm}',${req.body.tipo},'${req.body.solicitud}','${req.body.estado}','${req.body.fecha}')`
        connection.query(ADD_QUERY, (err,respose) =>{
            if(err) console.log(err)
        })
    }

    async setHistorial(res,req) {

        const DELETE_QUERY = `SELECT id_imm FROM historialpeticiones WHERE id_imm = '${req.body.id}' AND tipo = ${req.body.tipo}`
        connection.query(DELETE_QUERY, (err, res) =>{
            if(err) console.log(err)
            else{
                var idIndicadores = res.map(function(x) {
                    return x.id;
                 });
                 for(let i=0; i < idIndicadores.length ; i++){ 
                    const ADD_QUERY = `UPDATE historialpeticiones SET id_imm = '${req.body.D}' WHERE id_imm = "${req.body.id}" AND tipo = ${req.body.tipo};`
                    connection.query(ADD_QUERY, (err) =>{
                        if(err) console.log(err)
                    })   
                }
            }
        })
    }
}

module.exports = {
    historialServicios
};