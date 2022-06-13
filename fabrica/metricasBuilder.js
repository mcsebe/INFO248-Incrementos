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

    // makeUnidad(Unidad){
    //     this.Unidad = Unidad;
    //     return this; 
    // }

    // makeFuenteInformacion(FuenteInformacion){
    //     this.FuenteInformacion = FuenteInformacion; 
    //     return this;
    // }

    // makeResponsable(Responsable){
    //     this.Responsable = Responsable;
    //     return this; 
    // }

    // makeFrecuencia(Frecuencia){

    //     this.Frecuencia = Frecuencia;
    //     return this; 
    // }




    build(){

        let m = new metricas(this); 
        return this; 
    }


}

module.exports =  metricasBuilder; 