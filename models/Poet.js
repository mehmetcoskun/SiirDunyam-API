const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Poet = sequelize.define('poets', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    poems_count: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
});

module.exports = Poet;