const isAuthenticated = require('./is-authonticated');
const { blogValidation, commentValidation } = require('./validation');

module.exports = {
  isAuthenticated,
  blogValidation,
  commentValidation,
};