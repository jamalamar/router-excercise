
let express = require('express')
let app = express()
let apiRouter = require('./api')


app.use('/api', apiRouter)