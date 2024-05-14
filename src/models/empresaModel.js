const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Empresa = db.define("empresa", {
    idEmpresa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    razaoSocial: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    contatoEmpresa: {
        type: Sequelize.STRING,
        allowNull: true 
    },
    tipoServico: {
        type: Sequelize.STRING,
        allowNull: true
    },
    valorEstimadoContrato: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios', // Nome da tabela de referência (deve coincidir com o nome da tabela no banco de dados)
            key: 'idUsuario' // Nome da coluna na tabela de referência
        }
    }
});

module.exports = Empresa;
