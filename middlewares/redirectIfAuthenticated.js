// Lo dejo como ejemplo por si tenemos que hacer un middleware propio

function redirectIfAuthenticated(req, res, next) {
  return next();
}

module.exports = redirectIfAuthenticated;
