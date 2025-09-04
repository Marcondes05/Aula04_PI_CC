// routes/gameRoutes.js
const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

// Criar um game
router.post("/", gameController.createGame);

// Listar todos os games
router.get("/", gameController.getAllGames);

// Buscar game por ID
router.get("/:id", gameController.getGameById);

// Atualizar um game
router.put("/:id", gameController.updateGame);

// Deletar um game
router.delete("/:id", gameController.deleteGame);

module.exports = router;
