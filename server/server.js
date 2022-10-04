const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Rutas
const rIndicadores = require('./routes/rIndicadores');
const rMetricas = require('./routes/rMetricas');
const rMetas = require('./routes/rMetas');
const rHistorial = require('./routes/rHistorial')

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use('/indicadores', rIndicadores);

app.use('/metricas', rMetricas);

app.use('/metas', rMetas);

app.use('/historial', rHistorial)

app.listen(4000, ()=> {
    console.log('Running on port 4000')
})