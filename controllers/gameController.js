// controllers/gameController.js
const Game = require("../models/Games");

// Criar um novo game
exports.createGame = async (req, res, next) => {
  try {
    const game = new Game(req.body);
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (error) {
    next(error); // Encaminha para o middleware de erro
  }
};

// Listar todos os games
exports.getAllGames = async (req, res, next) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

// Buscar game por ID
exports.getGameById = async (req, res, next) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game não encontrado" });
    }
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

// Atualizar game existente
exports.updateGame = async (req, res, next) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // runValidators aplica as validações do schema
    );

    if (!updatedGame) {
      return res.status(404).json({ message: "Game não encontrado" });
    }

    res.status(200).json(updatedGame);
  } catch (error) {
    next(error);
  }
};

// Deletar game
exports.deleteGame = async (req, res, next) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);

    if (!deletedGame) {
      return res.status(404).json({ message: "Game não encontrado" });
    }

    res.status(200).json({ message: "Game deletado com sucesso" });
  } catch (error) {
    next(error);
  }
};
