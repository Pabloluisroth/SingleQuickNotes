// variables de entorno

module.exports = {
  port: process.env.PORT_API || 3000,
  log:process.env.LOG || 'SingleQuickNotes\server\logs\server.log',
  // db:process.env.DATABASE_URL || 'mongodb+srv://admin:SingleQuickNotes@cluster0.v5hhzmy.mongodb.net/tareas'
};



