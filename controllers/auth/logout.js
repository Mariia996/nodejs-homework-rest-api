const { users: service } = require('../../services')

const logout = async (req, res, next) => {
  const { _id } = req.user
  try {
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
