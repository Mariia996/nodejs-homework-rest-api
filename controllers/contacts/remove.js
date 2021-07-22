const { contacts: service } = require('../../services')
const mongoose = require('mongoose')

const remove = async (req, res, next) => {
  const { user } = req
  const { contactId } = req.params
  try {
    const validationContactId = mongoose.isValidObjectId(contactId)
    if (!validationContactId) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Contact id is not a string'
      })
    }
    await service.remove({ _id: contactId, owner: user._id })
    res.status(204).json({
      status: 'success',
      code: 204,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = remove
