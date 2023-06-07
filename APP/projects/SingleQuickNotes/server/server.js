const config = require('./config/environment ');
const http = require('http');
const chalk  = require('chalk');
var mongoose = require('mongoose');
const logger = require('./config/logger');
const app = require('./config/app');

// Conexión a la base de datos MongoDB a traves de Mongoose
var dbURI = 'mongodb://localhost/SingleQuickNotes';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// Configuracion de los eventos de la conexión Mongoose
mongoose.connection.on('connected', function () {
  console.log(chalk.hex('#24F803')(' Mongoose connection ' + dbURI));
});

mongoose.connection.on('error',function (err) {
  console.log(' Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log(chalk.hex('#aa36a5')('\n Mongoose connection disconnected'));
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log(chalk.hex('#aa36a5')(' Mongoose through app termination'));
    process.exit(0);
  });
});

//Creamos el servidor http con la aplicación express y abrimos puerto
const server = http.createServer(app);
server.listen (config.port, () => console.log(chalk.hex('#24F803')(` \n SingleQuickNotes ™ running at port localhost: ${config.PORT_API}`)));
logger.info(" SingleQuickNotes ™ ");
setTimeout(() => {
  console.log(chalk.hex('#24F803')(` Autogenerating log server in directory: ${config.LOG}`));
}, 1000);
