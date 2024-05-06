const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Complementacao = db.define("complementacao", {
    idComplementacao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comprAssumidos: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },
    idEmpresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'empresas',
            key: 'idEmpresa' 
        }
    }
});

module.exports = Complementacao;
