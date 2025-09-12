const express = require('express');
const Games = require('../models/Games');

const router = express.Router();

// POST
router.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const game = await Games.create(req.body);
        res.status(201).json({
            message: 'Jogo registrado com sucesso',
            jogo: game
        });

    } catch (error) {
        next(error);
    }
});

// GET ALL
router.get('/', async (req, res, next) => {
    try {
        const games = await Games.find();
        res.status(200).json(games);
    } catch (error) {
        next(error);
    }
});

// GET ONE
router.get('/:id', async (req, res, next) => {
    try {
        const game = await Games.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Jogo não encontrado' });
        }
        res.status(200).json(game);
        
    } catch (error) {
        next(error);
    }
});

// PATCH
router.patch('/:id', async (req, res, next) => {
    try {
        const game = await Games.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!game) {
            return res.status(404).json({ message: 'Jogo não encontrado' });
        }
        res.status(200).json({ message: 'Jogo atualizado com sucesso', jogo: game });
    } catch (error) {
        next(error);
    }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const game = await Games.findByIdAndDelete(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Jogo não encontrado' });
        }
        res.status(200).json({ message: 'Jogo deletado com sucesso' });
    } catch (error) {
        next(error);
    }
});

module.exports = router;