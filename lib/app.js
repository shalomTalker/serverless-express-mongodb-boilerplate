const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const helmet = require('helmet')
const routes = require('./routes')
const cors = require('cors')

require('./db')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

app.use('/api', routes)


module.exports = app