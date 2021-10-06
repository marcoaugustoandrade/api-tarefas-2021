const Tarefa = require("../models/Tarefa")

exports.listarTodas = (req, res) => {
  try {
    const pagina = req.params.pagina
    const limite = 2
    const documentosPulados = limite * (pagina - 1)

    Tarefa.find().skip(documentosPulados).limit(limite).then((dados) => {
      if (dados.length > 0) {
        res.status(200)
        res.send(dados)
      } else {
        res.status(404)
        res.send({
          mensagem: "A página consultada não existe"
        })
      }
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

exports.inserir = (req, res) => {
  try {
    const tarefa = new Tarefa({
      descricao: req.body.descricao,
      data: req.body.data,
      realizado: req.body.realizado
    })

    tarefa.save((erro, dados) => {
      res.status(201)
      res.send(dados)
    })
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}

exports.alterar = (req, res) => {
  try {
    const tarefaAtualizada = {
      descricao: req.body.descricao,
      data: req.body.data,
      realizado: req.body.realizado
    }

    const id = req.params.id

    Tarefa.findByIdAndUpdate(id, tarefaAtualizada, (erro, dados) => {
      Tarefa.findById(id, (erro, dados) => {
        res.status(200)
        res.send(dados)
      })
    })
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}

exports.deletar = (req, res) => {
  try {
    const id = req.params.id

    Tarefa.findByIdAndDelete(id, (erro, dados) => {
      if (dados) {
        res.status(200)
        res.send({ mensagem: "Tarefa deletada com sucesso! " })
      } else {
        res.status(404)
        res.send({ mensagem: "Tarefa não encontrada" })
      }
    })
  } catch (erro) {
    res.status(500)
    res.send({ mensagem: erro.message })
  }
}
