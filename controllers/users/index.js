const getCurrentUser = require('./getCurrentUser')
const updateSubscription = require('./updateSubscription')
const avatars = require('./avatars')
const verify = require('./verify')
const reVerify = require('./reVerify')

const users = {
  getCurrentUser,
  updateSubscription,
  avatars,
  verify,
  reVerify
}

module.exports = users
