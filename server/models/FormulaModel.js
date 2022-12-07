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

// 1   Publicacion con coautor extranjero
// 2   Publicacion
// 3   publicacion ingenieria
// 4   publicacion otra disciplina

// Total publicaciones extrajeras entre --- y ---
// SELECt SUM(valor) FROM `variables_publicaciones` 
// JOIN publicacion P
// ON id_publicacion = P.publicacion_id WHERE id_variable= 1 AND P.anio BETWEEN "2020-05-12" AND "2022-06-15";

// Total publicaciones entre --- y ---
// SELECt SUM(valor) FROM `variables_publicaciones` 
// JOIN publicacion P
// ON id_publicacion = P.publicacion_id WHERE id_variable= 2 AND P.anio BETWEEN "2020-05-12" AND "2022-06-15";

// Total publicaciones de ingeniería entre --- y ---
// SELECt SUM(valor) FROM `variables_publicaciones` 
// JOIN publicacion P
// ON id_publicacion = P.publicacion_id WHERE id_variable= 3 AND P.anio BETWEEN "2020-05-12" AND "2022-06-15";

// Total publicaciones de otas diciplinas entre --- y ---
// SELECt SUM(valor) FROM `variables_publicaciones` 
// JOIN publicacion P
// ON id_publicacion = P.publicacion_id WHERE id_variable= 4 AND P.anio BETWEEN "2020-05-12" AND "2022-06-15";