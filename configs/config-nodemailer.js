require('dotenv').config()
const { EMAIL_PASSWORD } = process.env

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'mariia996@meta.ua',
    pass: EMAIL_PASSWORD
  }
}

module.exports = config
