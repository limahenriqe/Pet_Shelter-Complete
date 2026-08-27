const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const Pet = sequelize.define("Pet", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    breed: {
        type: DataTypes.STRING,
        allowNull: false

    }

});

module.exports = Pet;