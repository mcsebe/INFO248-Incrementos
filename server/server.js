const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.get('/indicadores', (req,res)=> {
    const TASK_QUERY = "select * from indicadores"
    connection.query(TASK_QUERY, (err, respose) =>{
        if(err) console.log(err)
        else res.send(respose)
    })
})

app.post('/addindicadores', (req,res)=> {
    const ADD_QUERY = `insert into indicadores values ('${req.body.id}','${req.body.CalificacionCORFO}','${req.body.MisionUniversitaria}','${req.body.nombre}','${req.body.TipoIndicador}','${req.body.eje}','${req.body.Unidad}','${req.body.FuenteInformacion}')`
    connection.query(ADD_QUERY, (err) =>{
        if(err) console.log(err)
        else res.send('addindicadores')
    })
})

app.delete('/deleteindicadores/:id', (req,res)=> {
    const DELETE_QUERY = `DELETE FROM indicadores where (id = '${req.params.id}')`
    connection.query(DELETE_QUERY, (err, res) =>{
        if(err) console.log(err)
    })
})

app.listen(4000, ()=> {
    console.log('Running on port 4000')
})