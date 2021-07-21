const express = require('express')

const useAuth = require('./useAuth')

const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/current', useAuth, ctrl.getCurrentUser)

router.patch('/', useAuth, express.json(), ctrl.updateSubscription)

module.exports = router
