const mongoose = require('mongoose')
const app = require('../app')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const { DB_HOST } = process.env

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  app.listen(PORT, () => {
    console.log('Database connection successful')
  })
}).catch(error => {
  console.log(error)
  process.exit(1)
})
