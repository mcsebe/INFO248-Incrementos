const metricas = require("../negocio/metricas");

class metricasBuilder{
    constructor(id){
        this.id = id; 
        return this; 
    }


    makeNombre(nombre){
        this.nombre = nombre; 
        return this 

    }

    build(){

        let m = new metricas(this); 
        return this; 
    }


}

module.exports =  metricasBuilder; 