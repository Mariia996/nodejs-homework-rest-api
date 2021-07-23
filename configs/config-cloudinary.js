const cloudinary = require('cloudinary').v2
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})

const uploadFile = (pathFile) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(pathFile, {
      folder: 'avatars',
      transformation: {
        width: 250,
        crop: 'fill'
      }
    },
    (error, result) => {
      if (error) { reject(error) }
      if (result) { resolve(result) }
    })
  })
}

const deleteFile = (idCloudAvatar) => {
  cloudinary.uploader.destroy(idCloudAvatar, (err, result) => {
    console.log(err, result)
  })
}

module.exports = {
  uploadFile,
  deleteFile
}
