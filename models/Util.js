const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Util = sequelize.define('utils', {
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
    text: {
        type: Sequelize.TEXT,
        allowNull: true
    },
});

module.exports = Util;