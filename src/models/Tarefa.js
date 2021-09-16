const mongoose = require('../connection')
const Schema = mongoose.Schema

const tarefaSchema = new Schema({
    descricao: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: false
    },
    realizado: {
        type: Boolean,
        required: true
    }
})

const Tarefa = mongoose.model("Tarefa", tarefaSchema)
module.exports = Tarefa