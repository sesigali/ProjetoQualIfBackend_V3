const Usuario = require("../models/index").Usuario;
const router = require("express").Router();

//Cadastrar Usuário
router.post('/adicionar', async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (email && senha) {
            await Usuario.sync();
            const usuarioEntity = await Usuario.create({
                email,
                senha
            });
            res.status(201).json(usuarioEntity);
        } else {
            res.status(422).json({ Erro: "Parâmetros faltando!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Listar um Usuário por ID
router.get('/listarusuario/:id', async (req, res) => {
    try {
        await Usuario.sync();
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ Erro: "Usuário não encontrado!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

//Excluir um Usuário por ID
router.delete('/excluir/:id', async (req, res) => {
    try {
        await Usuario.sync();
        const usuario = await Usuario.findByPk(req.params.id);
        if (usuario) {
            await usuario.destroy();
            res.send(`Usuário ${req.params.id} excluído!`);
        } else {
            res.status(404).json({ Erro: "Usuário não encontrado!" });
        }
    } catch (e) {
        res.status(500).json({ Erro: "Erro no servidor!" });
    }
});

module.exports = router;