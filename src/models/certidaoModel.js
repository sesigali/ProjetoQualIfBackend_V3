const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Certidao = db.define("certidao", {
    idCertidao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    certidaoFalencia: {
        type: Sequelize.BLOB,
        allowNull: true
    },
    naturezaCertidao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    planoRecuperacao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    idEmpresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'empresas', // Nome da tabela de referência (deve coincidir com o nome da tabela no banco de dados)
            key: 'idEmpresa' // Nome da coluna na tabela de referência
        }
    }
});

module.exports = Certidao;
