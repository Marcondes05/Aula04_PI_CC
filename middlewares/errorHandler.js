// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error("❌ Erro:", err.message);

  // Erros de validação do Mongoose
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Erro de validação",
      errors: err.errors,
    });
  }

  // ID inválido (ObjectId mal formatado)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(400).json({
      message: "ID inválido",
    });
  }

  // Erro genérico
  res.status(500).json({
    message: "Erro interno do servidor",
  });
};
