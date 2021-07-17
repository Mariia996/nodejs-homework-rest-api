const jwt = require('jsonwebtoken')
require('dotenv').config()
const { users: service } = require('../../services')
const { users } = require('../../utils/validationSchemas')

const login = async (req, res, next) => {
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
    const user = await service.getOne({ email })
    if (!user || !user.validPassword(password)) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Email or password is wrong'
      })
    }
    const { TOKEN_KEY } = process.env
    const payload = {
      id: user._id
    }
    const token = jwt.sign(payload, TOKEN_KEY)
    await service.update(user._id, { token })
    res.json({
      status: 'success',
      code: 200,
      data: {
        token,
        user: {
          email: user.email,
          subscription: user.subscription
        }
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = login
