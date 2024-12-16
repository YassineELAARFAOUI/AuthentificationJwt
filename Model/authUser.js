const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const AuthUser = sequelize.define('AuthUser', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: { 
            msg: 'Le nom existe déjà. Veuillez en choisir un autre.' 
        }
    },
    password: {
        type: DataTypes.STRING
    }
});

module.exports = AuthUser;
