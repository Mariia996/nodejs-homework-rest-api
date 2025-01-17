const { contacts: service } = require('../../services')

const getAll = async (req, res, next) => {
  const { query, user } = req
  try {
    const { docs, totalDocs, limit, page, totalPages } = await service.getAll(user._id, query)
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts: docs,
        total: totalDocs,
        limit,
        page,
        totalPages
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll
