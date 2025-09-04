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
        lancamento: {
        type: String,
        required: [true, "Esse campo é obrigatório"],
        match: [/^\d{4}$/, "Ano inválido (use formato YYYY)"]
        }

    },
    { versionKey: false }
);

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;