//Projecto node basico con express 
//modulos nuevos de la nueva version 
// import express from 'express' (Similares a los de React.js)
//para que esta sintaxis funcione temeos que agregar al package json type: module


//Modulos clasicos
const app = require('./app')

//DataBase 
const sequelize = require('./database/database')

//Modules
/* const Project = require('./models/Project')
const Task = require('./models/Task') */

require('dotenv').config()

const PORT = process.env.PORT


const main = async () => {

    try{
        //Similar a sequelize.authenticate()
        await sequelize.sync( {forse: false} );
        console.log('Connection con base de datos exitosa')
        app.listen(PORT, console.log(`Listen on port ... ${PORT}`))
    } catch(error){
        console.error('Error al conectar con la base de datos:', error)
    }
    
}


main();




//app.use para utilizar las rutas que importamos desde el archivo employes


