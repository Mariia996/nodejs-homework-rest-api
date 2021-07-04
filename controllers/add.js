const { Contact } = require('../models')
const { validationSchemaAdd } = require('../utils/validationSchemas')

const add = async (req, res, next) => {
  const newContact = req.body
  try {
    const { error } = validationSchemaAdd.validate(newContact)
    if (error) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
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
