const express = require('express');
const enrutador = express.Router();
const servicios = require('../models/HistorialModel')
const sHistorial = new servicios.historialServicios();

enrutador.get('/lista', (req,res)=> {
    sHistorial.getHistorialPeticiones(res);
})

module.exports = enrutador;