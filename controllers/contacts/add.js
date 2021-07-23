const { contacts: service } = require('../../services')
const { contacts } = require('../../utils/validationSchemas')

const add = async (req, res, next) => {
  const { body, user } = req
  try {
    const { error } = contacts.validationSchemaAdd.validate(body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const result = await service.getOne({ email: body.email, owner: user._id })
    if (result) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Contact is already exist'
      })
    }
    body.owner = user._id
    const data = await service.add(body)
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
