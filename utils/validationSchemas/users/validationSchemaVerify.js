const Joi = require('joi')

const validationSchemaVerify = Joi.object({
  email: Joi.string()
    .email()
    .required(),
})

module.exports = validationSchemaVerify
