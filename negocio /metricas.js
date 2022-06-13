
class metricas{
    constructor(metricas){
        this.id = metricas.id; 
        this.nombre = metricas.nombre;

        // this.Unidad = metricas.Unidad;
        // this.FuenteInformacion = metricas.FuenteInformacion;
        // this.Responsable = metricas.Responsable;
        // this.Frecuencia = metricas.Frecuencia;

    }

    getNombre(){
        return this.nombre;
    }

}

module.exports = metricas; 
