const Sequelize = require("sequelize");
const db = require("../db/db.js");
const bcrypt = require('bcrypt');

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
}, {
    hooks: {
        beforeCreate: async (usuario) => {
            const salt = await bcrypt.genSalt(10);
            usuario.senha = await bcrypt.hash(usuario.senha, salt);
        }
    }
});

module.exports = Usuario;