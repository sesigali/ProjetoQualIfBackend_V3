const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Balanco = db.define("balanco", {
    idBalanco: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    balanco: {
        type: Sequelize.BLOB, 
        allowNull: true
    },
    conformidadeLei: {
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

module.exports = Balanco;
