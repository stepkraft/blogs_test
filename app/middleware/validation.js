const Joi = require('joi');

const blogValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().uri().required(),
    description: Joi.string()
  });

  validateRequest(req, next, schema);
};

const commentValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    comment: Joi.string().required()
  });

  validateRequest(req, next, schema);
};

function validateRequest(req, next, schema) {
  const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
      next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
  } else {
      req.body = value;
      next();
  }
}
module.exports = {
  blogValidation,
  commentValidation,
};