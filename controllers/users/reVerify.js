const { users } = require('../../utils/validationSchemas')
const { users: service } = require('../../services')

const reVerify = async (req, res, next) => {
  const { body } = req
  try {
    const { error } = await users.validationSchemaVerify.validate(body)
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Missing required field email'
      })
    }
    const user = await service.getOne(body)
    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found'
      })
    }
    if (user.verify) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Verification has already been passed'
      })
    }
    await user.updateOne({ verify: true, verifyToken: null })
    res.json({
      status: 'success',
      code: 200,
      message: 'Verification email sent'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = reVerify
