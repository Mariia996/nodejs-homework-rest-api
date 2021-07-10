const { model } = require('mongoose')

const { contactsSchema } = require('./schemas')

const Contact = model('contact', contactsSchema)

module.exports = Contact
