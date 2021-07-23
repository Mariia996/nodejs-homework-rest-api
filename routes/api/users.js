const express = require('express')

const useAuth = require('./useAuth')

const upload = require('../../configs/config-multer')

const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/current', useAuth, ctrl.getCurrentUser)

router.patch('/', useAuth, express.json(), ctrl.updateSubscription)

router.patch('/avatars', useAuth, upload.single('avatar'), ctrl.avatars)

module.exports = router
