const multer = require('multer')
const path = require('path')
require('dotenv').config()

const tempDir = path.join(process.cwd(), process.env.TEMP_DIR)
// const uploadDir = path.join(process.cwd(), 'public', 'avatars')

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, tempDir)
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 2000000
  },
  fileFilter: (_, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true)
      return
    }
    cb(null, false)
  }
})

const upload = multer({
  storage
})

module.exports = upload
