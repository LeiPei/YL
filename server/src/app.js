const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config') //eslint-disable-line

const app = express()
app.use(morgan('combined')) // morgan log
app.use(bodyParser.json())
app.use(cors())

require('./router')(app)

// app.listen(config.port)
// console.log(`Server started on port ${config.port}`)
module.exports = app
