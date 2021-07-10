const { validationSchemaUpStatus } = require('../utils/validationSchemas')
const { Contact } = require('../models')
const mongoose = require('mongoose')

const updateStatus = async (req, res, next) => {
  const { contactId } = req.params
  const { body } = req
  try {
    const { error } = validationSchemaUpStatus.validate(body)
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing field favorite'
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
    const updatedContact = await Contact.findByIdAndUpdate(contactId, body)
    if (!updatedContact) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact not found'
      })
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        updatedContact
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateStatus
