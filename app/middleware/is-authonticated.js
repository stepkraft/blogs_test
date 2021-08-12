const isAuthenticated = (req, res, next) => {
  return next();
};

module.exports = isAuthenticated;
