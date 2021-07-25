const { nanoid } = require('nanoid')
const { users: service } = require('../../services')
const { users } = require('../../utils/validationSchemas')
const { sendMail, textRegisterMail } = require('../../utils')

const register = async (req, res, next) => {
  const verifyToken = nanoid()
  const { email, password } = req.body
  try {
    const { error } = users.validationSchemaAuth.validate({ email, password })
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad request'
      })
    }
    const result = await service.getOne({ email })
    if (result) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Already registered'
      })
    }
    const emailBody = textRegisterMail(verifyToken, email)
    await sendMail({ email, subject: 'Confirm registration', emailBody })
    const data = await service.add({ email, password, verifyToken })
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Successfully added',
      user: {
        email: data.email,
        subscription: data.subscription,
        avatarUrl: data.avatarURL
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
