
const {indicadoresBuilder} = require('../../fabrica/indicadoresBuilder');
let indicador1 = new indicadoresBuilder("C01").makeCalificacionCORFO("Crítico").makeNumeroIndicador("01").makeMisionUniversitaria("Segunda").makeNombre("prueba").makeTipoIndicador("Proceso").makeEje("Comercialización de Tecnología y Emprendimiento de Base Tecnológica").makeUnidad("-").makeFuenteInformacion("-").makeResponsable("-").makeFrecuencia("-").makePeticion("Aprobado").makeidMetrica(0).makeidMeta(0).build();



describe('Casos de pruebas', ()=> {
    test('verificar CalificacionCORFO de indicador ', async () => {
        calCORFO = indicador1.getCalificacionCORFO();
        expect(calCORFO).toEqual("Crítico");
    })

    test('verificar NumeroIndicador ', async () => {
        const NumeroIndicador = indicador1.getNumeroIndicador()
        expect(NumeroIndicador).toEqual("01");
    })

    test('verificar MisionUniversitaria ', async () => {
        const MisionUniversitaria1 = indicador1.getMisionUniversitaria();
        expect(MisionUniversitaria1).toEqual("Segunda");
    })


    test('verificar nombre  ', async () => {
        const Nombre = indicador1.getNombre()
        expect(Nombre).toEqual("prueba");
    })

    test('verificar TipoIndicador  ', async () => {
        const TipoIndicador = indicador1.getTipoIndicador()
        expect(TipoIndicador).toEqual("Proceso");
    })




    test('verificar Eje de indicador ', async () => {
         const eje = indicador1.getEje()
         expect(eje).toEqual("Comercialización de Tecnología y Emprendimiento de Base Tecnológica");
     })


     test('verificar Peticion ', async () => {
        const Peticion1 = indicador1.getPeticion()
        expect(Peticion1).toEqual("Aprobado");
    })

     



})