// const { jsonReader } = require('../utils')
// const { updateContact } = jsonReader
// const { putValidSchema } = require('./validationSchema')
const { Contact } = require('../models')

const update = async (req, res, next) => {
  const { contactId } = req.params
  const updatedContact = req.body
  // const { error } = putValidSchema.validate(updatedContact)
  try {
    // const contact = await updateContact(parseInt(contactId), updatedContact)
    // if (!contact) {
    //   return res.status(404).json({
    //     status: 'error',
    //     code: 404,
    //     message: 'Contact not found'
    //   })
    // }
    res.json({
      status: 'Contact seccessfully updated',
      code: 200,
      data: {
        result: contact
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = update
