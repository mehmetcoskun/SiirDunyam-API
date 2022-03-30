const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Poem = sequelize.define('poems', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    author_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: true
    },
});

module.exports = Poem;