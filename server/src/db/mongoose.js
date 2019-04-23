const mongoose = require('mongoose')
const host = process.env.DB_HOST || '127.0.0.1:27017'
const dbName = process.env.DB_NAME || 'weather-api'

mongoose.connect(`mongodb://${host}/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})