const express = require('express');
const enrutador = express.Router();
const servicios = require('../models/MetasModel')
const sMetas = new servicios.metasServicios();

enrutador.get('/lista', (req,res)=> {
    sMetas.getMetas(res,req);
})

enrutador.post('/addmetas', (req,res)=> {
    sMetas.createMetas(res,req);
})

enrutador.put('/setaprobado/:id', (req,res)=> {
    sMetas.setAprobado(res,req.params.id);
  })
  
enrutador.put('/setpeticion/:id', (req,res)=> {
    sMetas.setPeticion(res,req.params.id);
})
  
enrutador.put('/deletemetas/:id', (req,res)=> {
    sMetas.deleteMetas(res,req.params.id)
})

enrutador.put('/editarmeta', (req,res)=> {
  sMetas.editarMeta(res,req)
})

enrutador.delete('/eliminarmetaeditado/:id', (req,res)=> {
  sMetas.eliminarMetaEditado(res,req.params.id);
  })
  
enrutador.delete('/eliminarmeta/:id', (req,res)=> {
  sMetas.eliminarMeta(res,req.params.id);
})

module.exports = enrutador;