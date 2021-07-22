const { users: service } = require('../../services')
const { uploadFile, deleteFile } = require('../../configs/config-cloudinary')
const fs = require('fs/promises')

const avatars = async (req, res, next) => {
  const { _id } = req.user
  const filePath = req.file.path
  try {
    const oldAvatar = await service.getById(_id)
    const { secure_url: avatar, public_id: idCloudAvatar } = await uploadFile(filePath)
    await deleteFile(oldAvatar.idCloudAvatar)
    const data = await service.updateAvatar(_id, avatar, idCloudAvatar)
    await fs.unlink(filePath)
    res.json({
      status: 'success',
      code: 200,
      data: {
        updatedAvatar: {
          avatarUrl: data.avatarURL
        }
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = avatars
