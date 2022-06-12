
class indicadores{
    constructor(indicadores){

        this.id = indicadores.id; 
        this.CalificacionCORFO = indicadores.CalificacionCORFO;
        this.NumeroIndicador = indicadores.NumeroIndicador;
        this.MisionUniversitaria = indicadores.MisionUniversitaria;
        this.nombre = indicadores.nombre; 
        this.TipoIndicador = indicadores.TipoIndicador;
        this.eje =  indicadores.eje;
        this.Unidad = indicadores.Unidad;
        this.FuenteInformacion = indicadores.FuenteInformacion;
        this.Responsable = indicadores.Responsable;
        this.Frecuencia = indicadores.Frecuencia;
        this.Peticion = indicadores.Peticion; 
        this.idMetrica = indicadores.idMetrica;
        this.idMeta = indicadores.idMeta;       
    }

    getCalificacionCORFO(){

        return this.CalificacionCORFO; 
    }

    getNumeroIndicador(){

        return this.NumeroIndicador;
    }

    getMisionUniversitaria(){

        return this.getMisionUniversitaria;
    }

    getNombre(){

        return this.nombre; 
    }

    getTipoIndicador(){

        return this.TipoIndicador;
    }

    getEje(){

        return this.eje; 
    }

    getUnidad(){
        return this.Unidad;
    }

    getFuenteInformacion(){

        return this.FuenteInformacion;
    }

    getResponsable(){

        return this.Responsable; 
    }

    getFrecuencia(){

        return this.Frecuencia; 
    }

    getPeticion(){
        return this.Peticion;
    }

    getIdMetrica(){
        return this.idMetrica;
    }

    getIdMetas(){
        return this.idMeta;
    }


}


module.exports = indicadores; 
 