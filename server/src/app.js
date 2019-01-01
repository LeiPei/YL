const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('../models') //eslint-disable-line

const app = express()
app.use(morgan('combined')) // morgan log
app.use(bodyParser.json())
app.use(cors())

require('./router')(app)

// sync() will create all table if they doesn't exist in database
sequelize.sync().then(function () {
  console.log('Nice, Database looks fine')
}).catch(function (err) {
  console.log(err, 'Something went wrong with the database update!')
})
module.exports = app
