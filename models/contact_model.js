const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    enquiry: {
        type: String,
        default: ''
    }
})

const ContactModel = mongoose.model('contact', ContactSchema)

module.exports = { ContactSchema, ContactModel }

