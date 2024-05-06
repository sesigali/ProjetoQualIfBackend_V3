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
});

module.exports = Empresa;
