// variables de entorno

module.exports = {
  port: process.env.PORT_API || 3000,
  dbURI:process.env.MONGO_URI || 'mongodb://localhost/SingleQuickNotes',
  log:process.env.LOG || 'SingleQuickNotes\server\logs\server.log',
};


