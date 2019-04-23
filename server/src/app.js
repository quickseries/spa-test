
const express = require("express")
const weatherRouter = require("./routers/weather")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(weatherRouter)

module.exports = app

