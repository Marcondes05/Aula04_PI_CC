// Schema para o modelo de games
const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [3, "O titulo deve ter pelo menos 3 caracteres"],
            maxlength: [100, "O titulo deve ter no máximo 100 caracteres"],
        },
        genero: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [3, "O genero deve ter pelo menos 3 caracteres"],
            maxlength: [100, "O genero deve ter no máximo 100 caracteres"],
        },
        plataforma: {
            type: String,
            required: [true, "Este campo é obrigatório"],
            minlength: [2, "A plataforma deve ter pelo menos 3 caracteres"],
            maxlength: [100, "A plataforma deve ter no máximo 100 caracteres"],
        },
        lancamento: {
            type: Number,
            required: [true, "Este campo é obrigatório"],
            min: [0, "O lancamento mínimo é 0"],
            max: [150, "lancamento inválido"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { versionKey: false }
);

const games = mongoose.model('games', gamesSchema);
module.exports = games;