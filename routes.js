const express = require('express')
const router = express.Router()
const { newContact, create } = require('./controllers/contact_controller')

router.get('/', newContact)

router.post('/contacts', create)

module.exports = router
