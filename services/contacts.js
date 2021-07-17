const { Contact } = require('../models')

const getAll = ({ page = 1, limit = 10, }) => {
  return Contact.paginate({}, {
    page,
    limit,
  })
}

const getOne = (filter) => {
  return Contact.findOne(filter)
}

const getById = (id) => {
  return Contact.findById(id)
}

const add = (contact) => {
  return Contact.create(contact)
}

const remove = (id) => {
  return Contact.findByIdAndDelete(id)
}

const update = (id, contact) => {
  return Contact.findByIdAndUpdate(id, contact)
}

const contacts = {
  getAll,
  getOne,
  getById,
  add,
  remove,
  update
}

module.exports = contacts
