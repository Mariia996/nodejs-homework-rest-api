const { contacts } = require('../../utils/validationSchemas')
const mongoose = require('mongoose')
const { contacts: service } = require('../../services')

const updateStatus = async (req, res, next) => {
  const { contactId } = req.params
  const { body } = req
  try {
    const { error } = contacts.validationSchemaUpStatus.validate(body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'missing field favorite'
      })
    }
    const validationContactId = mongoose.isValidObjectId(contactId)
    if (!validationContactId) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Contact id is not a string'
      })
    }
    const updatedContact = await service.update(contactId, body)
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
