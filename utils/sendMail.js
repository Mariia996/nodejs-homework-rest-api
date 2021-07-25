const nodemailer = require('nodemailer')
const config = require('../configs/config-nodemailer')

const transporter = nodemailer.createTransport(config)

const sendMail = async ({ email, subject, text }) => {
  const emailOptions = {
    to: email,
    from: 'mariia996@meta.ua',
    subject,
    text
  }
  try {
    const result = await transporter.sendMail(emailOptions)
    return result
  } catch (error) {
    throw new Error(503, 'Service Unavailable')
  }
}

module.exports = sendMail
