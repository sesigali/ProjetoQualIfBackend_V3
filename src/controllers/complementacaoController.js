const {Empresa} = require("../models");
const router = require("express").Router();
const Complementacao = require("../models/index").Complementacao;

//Cadastrar Complementacao
router.post('/adicionar', async (req, res) => {
    try {
        const { comprAssumidos, idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Complementacao.sync();
            const complementacaoEntity = await Complementacao.create({
                comprAssumidos,
                idEmpresa
            });
            res.status(201).json(complementacaoEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar uma Complementacao por ID
router.get('/listarcomplementacao/:id', async (req, res) => {
    try {
        await Complementacao.sync();
        const complementacaoEntity = await Complementacao.findOne({
            where: { idComplementacao: req.params.id }
        });
        res.json(complementacaoEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir uma Complementacao por ID
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Complementacao.sync();
        await Complementacao.destroy({
            where: { idComplementacao: req.params.id }
        });
        res.send(`Complementacao ${req.params.id} excluída!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar uma Complementacao por ID
router.put('/editar/:id', async (req, res) => {
    try {
        const { comprAssumidos, idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Complementacao.sync();
            await Complementacao.update({
                comprAssumidos,
                idEmpresa
            }, {
                where: { idComplementacao: req.params.id }
            });
            res.send(`Complementacao ${req.params.id} editada!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;