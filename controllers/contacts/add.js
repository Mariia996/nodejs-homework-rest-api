const { contacts: service } = require('../../services')
const { contacts } = require('../../utils/validationSchemas')

const add = async (req, res, next) => {
  const newContact = req.body
  try {
    const { error } = contacts.validationSchemaAdd.validate(newContact)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const result = await service.getOne({ email: newContact.email })
    if (result.length !== 0) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Contact is already exist'
      })
    }
    const data = await service.add(newContact)
    res.json({
      status: 'Success',
      code: 201,
      result: {
        data
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = add
