// Importar os modelos
const Empresa = require("./empresaModel");
const Certidao = require("./certidaoModel");
const Balanco = require("./balancoModel");
const Complementacao = require("./complementacaoModel");
const Compromisso = require("./compromissoModel");
const Indice = require("./indiceModel");
//const PatrimonioLiquido = require("./patrimonioLiqModel");
const Relatorio = require("./relatorioModel");

// Relatorio pertence a uma Empresa
Relatorio.belongsTo(Empresa, { foreignKey: "idEmpresa" });

// Empresa possui um Balanco, Certidao, Complementacao, Compromisso, Indice e PatrimonioLiquido
Empresa.hasOne(Balanco, { foreignKey: "idEmpresa" });
Empresa.hasOne(Certidao, { foreignKey: "idEmpresa" });
Empresa.hasOne(Complementacao, { foreignKey: "idEmpresa" });
Empresa.hasOne(Compromisso, { foreignKey: "idEmpresa" });
Empresa.hasOne(Indice, { foreignKey: "idEmpresa" });
//Empresa.hasOne(PatrimonioLiquido, { foreignKey: "idEmpresa" });

//sequelize.sync();

module.exports = {Empresa, Relatorio, Balanco, Certidao, Complementacao, Compromisso, Indice};