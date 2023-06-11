const config = require('./config/environment ');
const http = require('http');
const chalk  = require('chalk');
var mongoose = require('mongoose');
const logger = require('./config/logger');
const app = require('./config/app');
require('./config/environment ');

const database = mongoose.connection
mongoose.connect("mongodb+srv://admin:SingleQuickNotes@cluster0.v5hhzmy.mongodb.net/tareas", {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})

/* PARA FUNCIONAMIENTO EN LOCAL CON COMPASS
  var dbURI = 'mongodb://localhost/SingleQuickNotes';
  mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
*/

// Configuracion de los eventos de la conexión Mongoose
database.on('connected', function () {
  console.log(chalk.hex('#24F803')(' Mongoose default connection open to: '+ process.env.DATABASE_URL ));
});

database.on('error',function (err) {
  console.log(' Mongoose default connection error: ' + err);
});

database.on('disconnected', function () {
  console.log(chalk.hex('#aa36a5')('\n Mongoose connection disconnected'));
});

process.on('SIGINT', function() {
  database.close(function () {
    console.log(chalk.hex('#aa36a5')(' Mongoose through app termination'));
    process.exit(0);
  });
});

//Creamos el servidor http con la aplicación express y abrimos puerto
const server = http.createServer(app);
server.listen (config.port, () => console.log(chalk.hex('#24F803')(` \n SingleQuickNotes running at port localhost: ${config.PORT_API}`)));
logger.info(" SingleQuickNotes ™ ");
setTimeout(() => {
  console.log(chalk.hex('#24F803')(` Autogenerating log server in directory: ${config.LOG}`));
}, 1000);
