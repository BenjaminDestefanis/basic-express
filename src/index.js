//Projecto node basico con express 
//modulos nuevos de la nueva version 
// import express from 'express' (Similares a los de React.js)
//para que esta sintaxis funcione temeos que agregar al package json type: module


//Modulos clasicos
const express = require('express')
const app = express()
const router = require('./routes/employes')

const PORT = 3000

app.listen(PORT, console.log(`Listen on port ... ${PORT}`))

//app.use para utilizar las rutas que importamos desde el archivo employes
app.use(router)

