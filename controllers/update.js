const { validationSchemaUp } = require('../utils/validationSchemas')
const { Contact } = require('../models')
const mongoose = require('mongoose')

const update = async (req, res, next) => {
  const { contactId } = req.params
  const updatedContact = req.body
  try {
    const { error } = validationSchemaUp.validate(updatedContact)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const validationContactId = mongoose.isValidObjectId(contactId)
    if (!validationContactId) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Contact id is not a string'
      })
    }
    const result = await Contact.findByIdAndUpdate(contactId, updatedContact)
    if (!result) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact not found'
      })
    }
    res.json({
      status: 'Contact seccessfully updated',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = update
