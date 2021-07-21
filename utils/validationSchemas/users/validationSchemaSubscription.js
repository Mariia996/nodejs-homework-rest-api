const Joi = require('joi')

const validationSchemaSubscription = Joi.object({
  subscription: Joi.string()
    .case('lower')
    .valid('starter', 'pro', 'business')
    .required()
})

module.exports = validationSchemaSubscription
