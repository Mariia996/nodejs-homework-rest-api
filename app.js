const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')

const {
  contactsRouter,
  authRouter,
  usersRouter
} = require('./routes/api')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/contacts', contactsRouter)

app.use(express.static(path.join(process.cwd(), 'public')))

// app.post('/profile', upload.single('avatar'), async (req, res, next) => {
//   const { path: tempName, originalname } = req.file
//   const fileName = path.join(uploadDir, originalname)
//   try {
//     const img = await jimp.read(tempName)
//     await img.autocrop().cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER || jimp.VERTICAL_ALIGN_MIDDLE).writeAsync(tempName)
//     await fs.rename(tempName, fileName)
//     res.json({
//       status: 'success',
//       code: 200,
//       data: {
//         result: {
//           avatar: fileName
//         }
//       }
//     })
//   } catch (error) {
//     await fs.unlink(tempName)
//     next(error)
//   }
// })

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found'
  })
})

app.use((err, _, res, __) => {
  const { code = 500, message = 'Server error' } = err
  res.status(code).json({
    status: 'fail',
    code,
    message
  })
})

module.exports = app
