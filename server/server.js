const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Rutas
const rIndicadores = require('./routes/rIndicadores');
const rMetricas = require('./routes/rMetricas');

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use('/indicadores', rIndicadores);

app.use('/metricas', rMetricas);

app.listen(8000, ()=> {
    console.log('Running on port 8000')
})