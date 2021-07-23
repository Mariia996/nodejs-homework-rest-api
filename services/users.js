const { User } = require('../models')

const getOne = (filter) => {
  return User.findOne(filter)
}

const getById = (id) => {
  return User.findById(id)
}

const add = ({ email, password }) => {
  const newUser = new User({ email })
  newUser.setPassword(password)
  return newUser.save()
}

const update = (id, obj) => {
  return User.findByIdAndUpdate(id, obj)
}

const updateAvatar = (id, avatar, idCloudAvatar) => {
  return User.findByIdAndUpdate(id, { avatarURL: avatar, idCloudAvatar })
}

module.exports = {
  getOne,
  getById,
  add,
  update,
  updateAvatar
}
