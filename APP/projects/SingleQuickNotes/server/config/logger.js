
const { createLogger, format, transports} = require ('winston'); // npm i winston
require('winston-mongodb'); // npm i winston-mongodb

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.align(),
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.printf(info => `[${info.timestamp}]${info.level}${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize:5120000,
            maxFiles:1,
            filename: `${__dirname}/../logs/server.log`
        }),
        new transports.MongoDB({
            level: 'info',
            db : 'mongodb+srv://admin:SingleQuickNotes@cluster0.v5hhzmy.mongodb.net/logs',
            options: {
                useUnifiedTopology: true
                //useNewUrlParser: true,
                //useFindAndModify: false
            },
            collection: 'logs',
            format: format.combine(
                format.timestamp(),
                format.json())
        })
    ]
});
