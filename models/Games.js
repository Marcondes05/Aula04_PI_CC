//.models/Games.js

//Criar um schema para um Game

const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            require: [true, "Esse Campo é Obrigatório"],
            minlength: [2, "Nome muito curto"],
            maxlength: [100, "Nome muito longo"]
        },
        genero: {
            type: String,
            require: [true, "Esse Campo é Obrigatório"],
            minlength: [2, "Gênero muito curto"],
            maxlength: [100, "Gênero muito longo"]
        },
        plataforma: {
            type: String,
            require: [true, "Esse Campo é Obrigatório"],
            minlength: [2, "Plataforma muito curto"],
            maxlength: [100, "Plataforma muito longo"]
        },
        // substitua a propriedade lancamento atual por algo assim:
        lancamento: {
        type: Number,
        required: [true, "Esse campo é obrigatório"],
        min: [1900, "Ano inválido, mínimo 1900"],
        max: [new Date().getFullYear(), `Ano inválido, máximo ${new Date().getFullYear()}`]
        }

    },
    { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;