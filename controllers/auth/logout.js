const { users: service } = require('../../services')

const logout = async (req, res, next) => {
  const { _id } = req.user
  try {
    const user = await service.getById(_id)
    if (!user) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Not authorized'
      })
    }
    await service.update(_id, { token: null })
    res.json({
      status: 'success',
      code: 204
    })
  } catch (error) {
    next(error)
  }
}

module.exports = logout
