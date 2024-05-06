const {Empresa} = require("../models");
const router = require("express").Router();
const Certidao = require("../models/index").Certidao;

//Cadastrar Certidao
router.post('/adicionar', async (req, res) => {
    try {
        const { certidaoFalencia, naturezaCertidao, planoRecuperacao, idEmpresa } = req.body;

        if (naturezaCertidao && planoRecuperacao && idEmpresa) {
            await Certidao.sync();
            const certidaoEntity = await Certidao.create({
                certidaoFalencia,
                naturezaCertidao,
                planoRecuperacao,
                idEmpresa
            });
            res.status(201).json(certidaoEntity);
        } else if (certidaoFalencia && naturezaCertidao  && idEmpresa) {
            await Certidao.sync();
            const certidaoEntity = await Certidao.create({
                certidaoFalencia,
                naturezaCertidao,
                idEmpresa
            });
            res.status(201).json(certidaoEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar uma Certidao por ID
router.get('/listarcertidao/:id', async (req, res) => {
    try {
        await Certidao.sync();
        const certidaoEntity = await Certidao.findOne({
            where: { idCertidao: req.params.id }
        });
        res.json(certidaoEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir uma Certidao por ID
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Certidao.sync();
        await Certidao.destroy({
            where: { idCertidao: req.params.id }
        });
        res.send(`Certidao ${req.params.id} excluída!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar uma Certidao por ID
router.put('/certidao/editar/:id', async (req, res) => {
    try {
        const { certidaoFalencia, naturezaCertidao, planoRecuperacao, idEmpresa } = req.body;

        if (idEmpresa != null) {
            await Certidao.sync();
            await Certidao.update({
                certidaoFalencia,
                naturezaCertidao,
                planoRecuperacao,
                idEmpresa
            }, {
                where: { idCertidao: req.params.id }
            });
            res.send(`Certidao ${req.params.id} editada!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;
