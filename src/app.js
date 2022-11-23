

const express = require('express')
const app = express()

//Routes
const projectRoutes = require('./routes/projects')

app.use(projectRoutes)

module.exports = app