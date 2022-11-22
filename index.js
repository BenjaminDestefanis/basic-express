//Projecto node basico con express 
//modulos nuevos de la nueva version 
// import express from 'express' (Similares a los de React.js)
//para que esta sintaxis funcione temeos que agregar al package json type: module


//Modulos clasicos
const express = require('express')
const app = express()

const PORT = 3000

app.listen(PORT, console.log(`Listen on port ... ${PORT}`))


//ENDPOINTS

app.get('/employes', (req, res) => {
    res.send('Obteniendo empleados')
})


app.post('/employes', (req, res) => {
    res.send('Creando empleados')
})


app.put('/employes', (req, res) => {
    res.send('Actualizando empleados')
})


app.delete('/employes', (req, res) => {
    res.send('Eliminando empleados')
})
