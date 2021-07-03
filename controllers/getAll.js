// const { jsonReader } = require('../utils')
// const { listContacts } = jsonReader
const { Contact } = require('../models')

const getAll = async (_, res, next) => {
  try {
    // const contacts = await listContacts()
    const result = await Contact.find({})
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll
