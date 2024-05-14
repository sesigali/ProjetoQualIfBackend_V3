const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Usuario = db.define("usuario", {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Garante que o email seja único na tabela
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Usuario;