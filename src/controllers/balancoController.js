const {Empresa} = require("../models");
const router = require("express").Router();
const Balanco = require("../models/index").Balanco;

//Cadastrar Balanco
router.post('/adicionar', async (req, res) => {
    try {
        const { balanco, conformidadeLei, idEmpresa } = req.body;

        if (balanco, conformidadeLei, idEmpresa) {
            await Balanco.sync();
            const balancoEntity = await Balanco.create({
                balanco,
                conformidadeLei,
                idEmpresa
            });
            res.status(201).json(balancoEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar um Balanco por ID
router.get('/listarbalanco/:id', async (req, res) => {
    try {
        await Balanco.sync();
        const balancoEntity = await Balanco.findOne({
            where: { idBalanco: req.params.id }
        });
        res.json(balancoEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir um Balanco por ID
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Balanco.sync();
        await Balanco.destroy({
            where: { idBalanco: req.params.id }
        });
        res.send(`Balanco ${req.params.id} excluído!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar um Balanco por ID
router.put('/editar/:id', async (req, res) => {
    try {
        const { balanco, conformidadeLei, idEmpresa } = req.body;

        if ( balanco, conformidadeLei, idEmpresa) {
            await Balanco.sync();
            await Balanco.update({
                balanco,
                conformidadeLei,
                idEmpresa
            }, {
                where: { idBalanco: req.params.id }
            });
            res.send(`Balanco ${req.params.id} editado!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;
