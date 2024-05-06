const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Compromisso = db.define("compromisso", {
    idCompromisso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    /*comprAssumidos: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },*/
    receitaBruta: {
        type: Sequelize.DOUBLE, 
        allowNull: true
    },
    declaracaoCompr: {
        type: Sequelize.BLOB, 
        allowNull: true
    },
    dre: {
        type: Sequelize.BLOB, 
        allowNull: true
    },
    justificativa: {
        type: Sequelize.STRING, 
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

module.exports = Compromisso;
