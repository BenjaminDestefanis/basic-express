const express = require('express')
const app = express()

//Routes
const projectRoutes = require('./routes/projects')


// middlewares

app.use(express.json()) //para que nuestra app comprenda datos JSON
app.use(projectRoutes)

module.exports = app