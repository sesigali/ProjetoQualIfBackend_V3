const Empresa = require("../models/index").Empresa;
const router = require("express").Router();

//Último Cadastro de Empresa
router.get('/ultimoCadastro', async (req, res) => {
    try {
        await Empresa.sync();
        const ultimoCadastro = await Empresa.findOne({
        order: [['createdAt', 'DESC']], // Ordena pela data de criação em ordem decrescente
    });
    
        res.json(ultimoCadastro);
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
}); 

//Cadastrar Empresa
router.post('/adicionar', async (req, res) => {
    try {
        const { razaoSocial, cnpj, contatoEmpresa, tipoServico, valorEstimadoContrato } = req.body;

        if (razaoSocial && cnpj && contatoEmpresa && tipoServico && valorEstimadoContrato) {
            await Empresa.sync();
            const empresaEntity = await Empresa.create({
                razaoSocial,
                cnpj,
                contatoEmpresa,
                tipoServico,
                valorEstimadoContrato
            });
            res.status(201).json(empresaEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });// verificar 422
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar Todas as Empresas
router.get('/listartodas', async (req, res) => {
    try {
        await Empresa.sync();
        const empresaEntity = await Empresa.findAll();
        res.send(JSON.stringify(empresaEntity, null, 2));
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar uma Empresa por ID
router.get('/listarempresa/:id', async (req, res) => {
    try {
        await Empresa.sync();
        const empresaEntity = await Empresa.findOne({
            where: { idEmpresa: req.params.id }
        });
        res.json(empresaEntity);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir uma Empresa por ID
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Empresa.sync();
        await Empresa.destroy({
            where: { idEmpresa: req.params.id }
        });
        res.send(`Empresa ${req.params.id} excluída!`);
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Editar uma Empresa por ID
router.put('/editar/:id', async (req, res) => {
    try {
        const { razaoSocial, cnpj, contatoEmpresa, tipoServico, valorEstimadoContrato } = req.body;

        if (razaoSocial && cnpj && contatoEmpresa && tipoServico && valorEstimadoContrato) {
            await Empresa.sync();
            await Empresa.update({
                razaoSocial,
                cnpj,
                contatoEmpresa,
                tipoServico,
                valorEstimadoContrato
            }, {
                where: { idEmpresa: req.params.id }
            });
            res.send(`Empresa ${req.params.id} editada!`);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;