// middlewares/logger.js
module.exports = (req, res, next) => {
  const { method, url } = req;
  const time = new Date().toISOString();
  console.log(`[${time}] ${method} ${url}`);
  next();
};
