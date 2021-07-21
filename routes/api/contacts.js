const express = require('express')
const router = express.Router()

const useAuth = require('./useAuth')

const { contacts: ctrl } = require('../../controllers')

router.get('/', useAuth, ctrl.getAll)

router.get('/:contactId', useAuth, ctrl.getOne)

router.post('/', express.json(), useAuth, ctrl.add)

router.delete('/:contactId', useAuth, ctrl.remove)

router.put('/:contactId', useAuth, express.json(), ctrl.update)

router.patch('/:contactId/favorite', useAuth, express.json(), ctrl.updateStatus)

module.exports = router
