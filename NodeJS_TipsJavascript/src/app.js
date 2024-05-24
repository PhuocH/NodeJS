require('dotenv').config()
const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()


//init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

//init db
require('./dbs/init.mongodb')
const { checkOverload } = require('./helper/check.connect')
checkOverload()


//init routes


//handling error

module.exports = app