const express = require('express');
const enrutador = express.Router();
const servicios = require('../models/VariablesModel')
const sVariables = new servicios.variablesServicios();

enrutador.put('/add', (req,res)=> {
  sVariables.addVariables(res,req);
})

enrutador.get('/M26', (req,res)=> {
  sVariables.M26(res,req);
})

enrutador.get('/M25', (req,res)=> {
  sVariables.M25(res,req);
  })
  
enrutador.get('/M49', (req,res)=> {
  sVariables.M49(res,req);
})
  

module.exports = enrutador;