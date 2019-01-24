
let express = require('express')
let app = express()
let catRouter = require('./cat-router')
let dogRouter = require('./dog-router')


app.use('/cats', catRouter)
app.use('/dogs', dogRouter)