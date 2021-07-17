const Joi = require('joi')

const validationSchemaUpStatus = Joi.object({
  favorite: Joi.boolean()
    .default(false)
    .required()
})

module.exports = validationSchemaUpStatus
