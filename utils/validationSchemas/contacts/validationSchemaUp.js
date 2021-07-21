const Joi = require('joi')

const validationSchemaUp = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(30),
  email: Joi.string()
    .email(),
  phone: Joi.string()
}).or('name', 'email', 'phone')

module.exports = validationSchemaUp
