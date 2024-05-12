const { Sequelize } = require("sequelize");
const db = require("../config/database.js");

const { DataTypes } = Sequelize;

const login = db.define('login', {
    NIM:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    refresh_token:{
        type:DataTypes.TEXT
    }
},{
    freezeTableName:true
});

module.exports = login;