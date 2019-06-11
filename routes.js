const express = require('express')
const router = express.Router()
const { newContact, create, index } = require('./controllers/contact_controller')

router.get('/', newContact)
router.get('/contacts', index)
router.post('/contacts', create)

module.exports = router
