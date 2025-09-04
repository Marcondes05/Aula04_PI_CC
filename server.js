require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const gameRoutes = require("./routes/gameRoutes");
const errorHandler = require("./middlewares/errorHandler");
const logger = require("./middlewares/logger");

const app = express();

// 🔹 Middlewares globais
app.use(express.json());
app.use(cors());
app.use(logger);

// 🔹 Health-check
app.get("/", (req, res) => {
  res.json({ status: "API rodando 🚀" });
});

// 🔹 Rotas agrupadas
app.use("/games", gameRoutes);

// 🔹 Middleware de erros (sempre por último)
app.use(errorHandler);

// 🔹 Configurações de ambiente
const { MONGODB_URI, USER, PASS, DB_NAME, PORT } = process.env;

// Se existir MONGODB_URI, usa direto; senão monta com USER + PASS
const uri =
  MONGODB_URI ||
  `mongodb+srv://${USER}:${PASS}@atividadepratica.imqkvm5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const conectaDB = require("./db");

conectaDB().then(() => {
  app.listen(PORT || 3000, () => console.log(`Servidor rodando...`));
});

