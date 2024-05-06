const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Indice = db.define("indice", {
    idIndice: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ativoCirculante: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    ativoReaLongoPrazo: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    ativoTotal: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    passivoCirculante: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    passivoNaoCirculante: {
        type: Sequelize.DOUBLE,
        allowNull: true
    },
    patrimonioLiquido: {
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

module.exports = Indice;
