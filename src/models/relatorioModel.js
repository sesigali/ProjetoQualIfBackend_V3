const Sequelize = require("sequelize");
const db = require("../db/db.js");

const Relatorio = db.define("relatorio", {
    idRelatorio: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    /*idEmpresa: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
            model: "Empresa", 
            key: "idEmpresa" 
        }
    },*/
});

module.exports = Relatorio;
