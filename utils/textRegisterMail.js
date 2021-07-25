const Mailgen = require('mailgen')

const textRegisterMail = (verifyToken, email) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'System Contacts',
      link: 'https://localhost:3000/'
    }
  })
  const template = {
    body: {
      name: email,
      intro: 'Welcome to System Contacts! We are very excited to have you on board.',
      action: {
        instructions: 'To get started with System Contacts, please click here:',
        button: {
          color: '#22BC66',
          text: 'Confirm your account',
          link: `https://localhost:3000/api/v1/users/verify/${verifyToken}`
        }
      },
      outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
  }
  const emailBody = mailGenerator.generate(template)
  return emailBody
}

module.exports = textRegisterMail
