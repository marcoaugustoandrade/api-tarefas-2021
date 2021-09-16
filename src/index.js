const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
const router = require('./routes')
app.use('/api/v1/', router)

// Subindo a API
app.listen(process.env.PORT, () => {
    console.log(`API rodando na porta ${process.env.PORT}`)
})
