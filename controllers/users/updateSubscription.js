const { users } = require('../../utils/validationSchemas')
const { users: service } = require('../../services')

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user
  const { body } = req
  try {
    const { error } = users.validationSchemaSubscription.validate(body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const updatedUser = await service.update(_id, body)
    if (!updatedUser) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact not found'
      })
    }
    const { email, subscription } = updatedUser
    res.json({
      status: 'success',
      code: 200,
      data: {
        updatedUser: {
          email,
          subscription
        }
      }
    })
  } catch (error) {
    next(error)
  }
}
module.exports = updateSubscription
