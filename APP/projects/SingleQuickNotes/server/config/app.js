const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 } //  solo registrar respuestas de error en la consola
})

//En este directorio tendremos los archivos obtenidos en el build de nuestra aplicación Angular
app.use(express.static(path.join(__dirname, '../../../../dist/SingleQuickNotes')));

//Cfg. de las rutas
app.get('/api', (req, res) => {
  res.send('La API funciona corectamente');
});
require('./../routes/tarea')(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../../dist/SingleQuickNotes/index.html'));
});

module.exports = app;
