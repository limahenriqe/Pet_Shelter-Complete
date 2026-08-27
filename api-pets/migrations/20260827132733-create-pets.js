"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.createTable("Pets", {

            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            type: {
                type: Sequelize.STRING,
                allowNull: false
            },

            age: {
                type: Sequelize.INTEGER,
                allowNull: false
            },

            breed: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },

            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }

        });
    },

    async down(queryInterface) {

        await queryInterface.dropTable("Pets");
    }
};