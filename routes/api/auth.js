const express = require('express')

const { auth: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/users/signup', ctrl.register)

router.post('/users/login', ctrl.login)

module.exports = router
