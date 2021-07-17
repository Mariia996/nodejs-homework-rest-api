const { model } = require('mongoose')

const { usersSchema } = require('./schemas')

const User = model('user', usersSchema)

module.exports = User
