const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Task = require('./Task')

//FIRST TABLE "PROJECT"

const Project = sequelize.define('project', {
    Id: {
        //DataTypes, pasa los tipos de datos que maneja sequelize
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.DataTypes.STRING
    },

    priority: {
        type: Sequelize.DataTypes.INTEGER
    },

    description: {
        type: Sequelize.DataTypes.STRING
    }
}, {
    timestamps: false
})



/*  Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
}) */

/* Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})   */

module.exports = Project