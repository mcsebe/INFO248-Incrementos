const express = require('express');
const enrutador = express.Router();
const servicios = require('../models/MetricasModel')
const sMetricas = new servicios.metricasServicios();

enrutador.get('/lista', (req,res)=> {
    sMetricas.getMetricas(res,req);
})

enrutador.post('/addmetricas', (req,res)=> {
    sMetricas.createMetricas(res,req);
})

enrutador.put('/setaprobado/:id', (req,res)=> {
    sMetricas.setAprobado(res,req.params.id);
  })
  
  enrutador.put('/setpeticion/:id', (req,res)=> {
    sMetricas.setPeticion(res,req.params.id);
  })
  
  enrutador.delete('/deletemetricas/:id', (req,res)=> {
    sMetricas.deleteMetricas(res,req.params.id)
  })

module.exports = enrutador;