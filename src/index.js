const express = require("express");
const app = express();
const port = 8888;
//const port = 80;
const db = require('./db/db');
const cors = require("cors");

app.use(cors()); // permite acesso de qualquer origem
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async() => {
  //await db.sync({force:true}) //resetar banco
  try{
    await db.sync();
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();

app.use("/balanco", require("./controllers/balancoController.js"))
app.use("/certidao", require("./controllers/certidaoController.js"))
app.use("/complementacao", require("./controllers/complementacaoController.js"))
app.use("/compromisso", require("./controllers/compromissoController.js"))
app.use("/empresa", require("./controllers/empresaController.js"))
app.use("/indice", require("./controllers/indiceController.js"))
app.use("/relatorio", require("./controllers/relatorioController.js"))
app.use("/usuario", require("./controllers/usuarioController.js"))


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})