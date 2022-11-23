//Sequelize hace referencia a la biblioteca completa
//sequelize hace referencia a una instancia
const Sequelize = require('sequelize');
require('dotenv').config()
const PASS = process.env.DATABASE_PASS


//Argumentos 1- Nombre de db 2- MotorSQL 3- Passwords
const sequelize = new Sequelize('projectsdb', 'postgres' , PASS ,{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;