// const { jsonReader } = require('../utils')
// const { addContact } = jsonReader
// const { postValidSchema } = require('./validationSchema')
const { Contact } = require('../models')

const add = async (req, res, next) => {
  const newContact = req.body
  try {
    // const addedContact = await addContact(newContact)
    const result = await Contact.create(newContact)
    res.json({
      status: 'Success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = add
