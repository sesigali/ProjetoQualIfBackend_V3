const {Empresa} = require("../models");
const router = require("express").Router();
const Compromisso = require("../models/index").Compromisso;

//Cadastrar Compromisso
router.post('/adicionar', async (req, res) => {
    try {
        const { declaracaoCompr, dre, receitaBruta, justificativa, idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Compromisso.sync();
            const compromissoEntity = await Compromisso.create({
                receitaBruta,
                declaracaoCompr,
                dre,
                justificativa,
                idEmpresa
            });
            res.status(201).json(compromissoEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar um Compromisso por ID
router.get('/listarcompromisso/:id', async (req, res) => {
    try {
        await Compromisso.sync();
        const compromissoEntity = await Compromisso.findOne({
            where: { idCompromisso: req.params.id }
        });
        res.json(compromissoEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir um Compromisso por ID
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Compromisso.sync();
        await Compromisso.destroy({
            where: { idCompromisso: req.params.id }
        });
        res.send(`Compromisso ${req.params.id} excluído!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar um Compromisso por ID
router.put('/editar/:id', async (req, res) => {
    try {
        const { declaracaoCompr, dre, receitaBruta, justificativa, idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Compromisso.sync();
            await Compromisso.update({
                receitaBruta,
                declaracaoCompr,
                dre,
                justificativa,
                idEmpresa
            }, {
                where: { idCompromisso: req.params.id }
            });
            res.send(`Compromisso ${req.params.id} editado!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;