const express = require('express');
const enrutador = express.Router();
const eje = require('../models/EjeModel')
const sEje = new eje.ejeServicios();

enrutador.get('/lista', (req,res)=> {
    sEje.getEje(res);
})

module.exports = enrutador;