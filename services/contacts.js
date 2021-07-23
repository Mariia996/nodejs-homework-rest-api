const { Contact } = require('../models')

const getAll = (userId, { page = 1, limit = 10, }) => {
  return Contact.paginate({
    owner: userId,
  }, {
    page,
    limit,
  })
}

const getOne = (filter) => {
  return Contact.findOne(filter)
}

const add = (contact) => {
  return Contact.create(contact)
}

const remove = (id) => {
  return Contact.findByIdAndRemove(id)
}

const update = (id, contact) => {
  return Contact.findByIdAndUpdate(id, contact)
}

const contacts = {
  getAll,
  getOne,
  add,
  remove,
  update
}

module.exports = contacts
