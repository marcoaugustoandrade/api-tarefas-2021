const Tarefa = require('../models/Tarefa')

exports.listarTodas = (req, res) => {
    
    try {

        Tarefa.find().then((dados) => {
            res.status(200)
            res.send(dados)
        })

    } catch (erro) {
        res.status(500)
        res.send({ mensagem: erro.message })
    }
}

exports.listarPorId = (req, res) => {

    try {

        const id = req.params.id

        Tarefa.findById(id, (erro, dados) => {
            if (dados) {
                res.status(200)
                res.send(dados)
            } else {
                res.status(404)
                res.send({ mensagem: "Nenhuma tarefa encontrada para este id" })
            }
        })

    } catch (erro) {
        res.status(500)
        res.send({ mensagem: erro.message })
    }
}

