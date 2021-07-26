const { users } = require('../../utils/validationSchemas')
const { users: service } = require('../../services')
const { sendMail, textRegisterMail } = require('../../utils')

const reVerify = async (req, res, next) => {
  const { email } = req.body
  try {
    const { error } = await users.validationSchemaVerify.validate({ email })
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Missing required field email'
      })
    }
    const user = await service.getOne({ email })
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
    const emailBody = await textRegisterMail(user.verifyToken, email)
    await sendMail({ email, subject: 'Confirm registration', emailBody })
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
