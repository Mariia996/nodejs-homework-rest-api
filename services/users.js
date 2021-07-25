const { User } = require('../models')

const getOne = (filter) => {
  return User.findOne(filter)
}

const getById = (id) => {
  return User.findById(id)
}

const add = async ({ email, password, verifyToken }) => {
  const newUser = new User({ email, verifyToken })
  newUser.setPassword(password)
  return newUser.save()
}

const update = (id, obj) => {
  return User.findByIdAndUpdate(id, obj)
}

const updateAvatar = (id, avatar, idCloudAvatar) => {
  return User.findByIdAndUpdate(id, { avatarURL: avatar, idCloudAvatar })
}

const verify = async ({ verificationToken }) => {
  const user = await User.findOne({ verifyToken: verificationToken })
  if (user) {
    await user.updateOne({ verify: true, verifyToken: null })
    return true
  }
  return false
}

module.exports = {
  getOne,
  getById,
  add,
  update,
  updateAvatar,
  verify
}
