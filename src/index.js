const express = require("express")
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

// Rotas
const router = require("./routes")
app.use("/api/v1/", router)

// Tratamento da rota não encontrada
app.use((req, res) => {
  res.status(404)
  res.send({
    status: 404,
    mensagem: "Rota não encontrada, configura a documentação em http://localhost:3002/api/v1/docs"
  })
})

// Error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode)
  res.send({
    "status": statusCode,
    "message": err.message
  })
})

// Subindo a API
app.listen(process.env.PORT, () => {
  console.log(`API rodando na porta ${process.env.PORT}`)
})
