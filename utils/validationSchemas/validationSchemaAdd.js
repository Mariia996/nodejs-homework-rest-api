const Joi = require('joi')

const validationSchemaAdd = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  email: Joi.string()
    .email()
    .required(),
  phone: Joi.string()
    .required()
})

module.exports = validationSchemaAdd
