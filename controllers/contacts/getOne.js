const mongoose = require('mongoose')
const { contacts: service } = require('../../services')

const getOne = async (req, res, next) => {
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
    const result = await service.getOne({ _id: contactId, owner: user._id })
    if (!result) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact not found'
      })
    }
    res.json({
      status: 'success',
      code: 200,
      data: result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getOne
