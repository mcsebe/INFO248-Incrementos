const connection = require('../db');


class variablesServicios{

    async addVariables(res,req) {
        let ADD_QUERY = `INSERT INTO variables_publicaciones (valor, id_publicacion, id_variable) values (1, ${req.body.publicacion_id}, 2);`
        connection.query(ADD_QUERY, (err) =>{
            if(err) console.log(err)
        })
        if (req.body.autores_extranjeros === 1){
            let ADD_QUERY = `INSERT INTO variables_publicaciones (valor, id_publicacion, id_variable) values (1, ${req.body.publicacion_id}, 1);`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log(err)
            })            
        }
        if (req.body.disciplina === "Ingeniería"){
            let ADD_QUERY = `INSERT INTO variables_publicaciones (valor, id_publicacion, id_variable) values (1, ${req.body.publicacion_id}, 3);`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log(err)
                else res.send("Ingeniería")
            })            
        }else{
            let ADD_QUERY = `INSERT INTO variables_publicaciones (valor, id_publicacion, id_variable) values (1, ${req.body.publicacion_id}, 4);`
            connection.query(ADD_QUERY, (err) =>{
                if(err) console.log("Otro")
            }) 
        }

    }

    async M26(res,req) {
        const TASK_QUERY = `SELECt SUM(valor) FROM variables_publicaciones JOIN publicacion P ON id_publicacion = P.publicacion_id WHERE id_variable= 3 AND P.anio BETWEEN "${req.body.fecha1}" AND "${req.body.fecha2}";`
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose[0]["SUM(valor)"])
        })
    }

    async M25(res,req) {
        const TASK_QUERY = `SELECt SUM(valor) FROM variables_publicaciones JOIN publicacion P ON id_publicacion = P.publicacion_id WHERE id_variable= 2 AND P.anio BETWEEN "${req.body.fecha1}" AND "${req.body.fecha2}";`
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else res.send(respose[0]["SUM(valor)"])
        })
    }
    

    async M49(res,req) {
        var extranjero;
        const TASK_QUERY = `SELECt SUM(valor) FROM variables_publicaciones JOIN publicacion P ON id_publicacion = P.publicacion_id WHERE id_variable= 1 AND P.anio BETWEEN "${req.body.fecha1}" AND "${req.body.fecha2}";`
        connection.query(TASK_QUERY, (err, respose) =>{
            if(err) console.log(err)
            else extranjero = respose[0]["SUM(valor)"]
        })
        const TASK_QUERY2 = `SELECt SUM(valor) FROM variables_publicaciones JOIN publicacion P ON id_publicacion = P.publicacion_id WHERE id_variable= 2 AND P.anio BETWEEN "${req.body.fecha1}" AND "${req.body.fecha2}";`
        connection.query(TASK_QUERY2, (err, respose) =>{
            if(err) console.log(err)
            else{
                let porcentaje = (extranjero/respose[0]["SUM(valor)"] * 100).toString();
                res.send(porcentaje);
            }
        })
    }

}

module.exports = {
    variablesServicios
};