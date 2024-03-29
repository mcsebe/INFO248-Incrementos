const express = require('express');
const enrutador = express.Router();
const servicios = require('../models/IndicadorModel')
const sIndicadores = new servicios.indicadoresServicios();

enrutador.get('/lista', (req,res)=> {
  sIndicadores.getIndicadores(res);
})

enrutador.post('/addindicadores', (req,res)=> {
  sIndicadores.createIndicador(res,req);
})

enrutador.put('/setmetricas', (req,res)=> {
  sIndicadores.setMetricas(res,req);
})

enrutador.put('/setmetas', (req,res)=> {
  sIndicadores.setMetas(res,req);
})

enrutador.put('/setaprobado/:id', (req,res)=> {
  sIndicadores.setAprobado(res,req.params.id);
})

enrutador.put('/setpeticion/:id', (req,res)=> {
  sIndicadores.setPeticion(res,req.params.id);
})

enrutador.put('/deleteindicadores/:id', (req,res)=> {
  sIndicadores.deleteIndicador(res,req.params.id)
})

module.exports = enrutador;