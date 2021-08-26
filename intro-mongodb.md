## Mostrar os bancos de dados
show dbs

## Utilizar um banco de dados
use db_tarefas

## Collections `tarefas`
db.tarefas.insertOne({
    "descricao": "Pagar conta de energia",
    "feito": false
})
db.tarefas.insertOne({
    "descricao": "Entregar a tarefa de matemática",
    "feito": true
})

db.tarefas.find()
db.tarefas.find({ "feito": true })

db.tarefas.insertOne({
    "descricao": "Trabalho de banco de dados",
    "subtarefas": [
        { "item": "Ler capítulo do livro", "feito": false },
        { "item": "Codificar estrutura das tabelas", "feito": false },
        { "item": "Testar", "feito": false },
        { "item": "Enviar no AVA", "feito": false }
    ]
})