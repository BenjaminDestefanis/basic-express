const Sequelize  = require("sequelize");
const sequelize = require("../database/database");



const Task = sequelize.define('Task', {
    Id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.DataTypes.INTEGER
    },

    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    },

    projectdb: {
        type: Sequelize.DataTypes.INTEGER
    }
})

module.exports = Task;