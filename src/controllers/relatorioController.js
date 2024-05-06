const Relatorio = require("../models/index").Relatorio;
const router = require("express").Router();

//Cadastrar Relatório
router.post('/relatorio/adicionar', async (req, res) => {
    try {
        const { idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Relatorio.sync();
            const relatorioEntity = await Relatorio.create({
                idEmpresa,
            });
            res.status(201).json(relatorioEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar um Relatório por ID
router.get('/relatorio/listarrelatorio/:id', async (req, res) => {
    try {
        await Relatorio.sync();
        const relatorioEntity = await Relatorio.findOne({
            where: { idRelatorio: req.params.id }
        });
        res.json(relatorioEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir um Relatório por ID
router.delete('/relatorio/excluir/:id', async (req, res) => {
    try {
        await Relatorio.sync();
        await Relatorio.destroy({
            where: { idRelatorio: req.params.id }
        });
        res.send(`Relatório ${req.params.id} excluído!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar um Relatório por ID
router.put('/relatorio/editar/:id', async (req, res) => {
    try {
        const { idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Relatorio.sync();
            await Relatorio.update({
                idEmpresa,
            }, {
                where: { idRelatorio: req.params.id }
            });
            res.send(`Relatório ${req.params.id} editado!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;