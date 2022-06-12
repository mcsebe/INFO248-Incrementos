
class metricas{
    constructor(metricas){
        this.id = metricas.id; 
        this.nombre = metricas.nombre;  
    }

    getNombre(){
        return this.nombre;
    }

}

module.exports = metricas; 
