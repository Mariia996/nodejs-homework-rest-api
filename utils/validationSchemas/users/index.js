const validationSchemaAuth = require('./validationSchemaAuth')
const validationSchemaSubscription = require('./validationSchemaSubscription')
const validationSchemaVerify = require('./validationSchemaVerify')

const users = {
  validationSchemaAuth,
  validationSchemaSubscription,
  validationSchemaVerify
}

module.exports = users
