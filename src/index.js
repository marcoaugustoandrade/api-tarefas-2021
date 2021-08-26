const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
app.get('/produtos', (req, res) => {

    const dados = [
        { 'id': 1, 'descricao': 'sabão em pó', 'quantidade': 2 },
        { 'id': 2, 'descricao': 'sabonete', 'quantidade': 8 },
        { 'id': 3, 'descricao': 'pasta de dente', 'quantidade': 10 }
    ]

    res.status(200)
    res.send(dados)
    console.log('Listando produtos')
})

// Subindo a API
const port = 3005
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
})
