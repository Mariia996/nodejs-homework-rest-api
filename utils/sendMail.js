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
    console.log(error)
    throw new Error('Service Unavailable')
  }
}

module.exports = sendMail
