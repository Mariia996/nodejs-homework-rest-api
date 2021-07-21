const getAll = require('./getAll')
const getOne = require('./getOne')
const remove = require('./remove')
const add = require('./add')
const update = require('./update')
const updateStatus = require('./updateStatus')

const contacts = {
  getAll,
  getOne,
  remove,
  add,
  update,
  updateStatus
}

module.exports = contacts
