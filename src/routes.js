const express = require("express")
const router = express.Router()
const tarefaController = require("./controllers/tarefaControllers")

// /api/v1/tarefas
router.get("/tarefas/pagina/:pagina", tarefaController.listarTodas)
router.get("/tarefas/:id", tarefaController.listarPorId)
router.post("/tarefas", tarefaController.inserir)
router.put("/tarefas/:id", tarefaController.alterar)
router.delete("/tarefas/:id", tarefaController.deletar)


router.get('/usuarios', (req, res, next) => {
  
  try {
    
    const id = 0
    if (id == 0) {
      throw new Error('O valor não pode ser igual a zero')
    }
    res.status(200)
    res.send({ "mensagem": "tudo ok" })

  } catch(error) {
    next(error)
  }
})

router.get('/login', (req, res) => {
  throw new Error('Login não efetuado')
})


module.exports = router
