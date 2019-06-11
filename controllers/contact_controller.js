// const contacts = []
const {
    ContactModel
} = require('../models/contact_model')

let index = (req, res) => {
    ContactModel.find()
        .then(contacts => {
                res.render('layouts/main', {
                    view: 'contacts',
                    title: 'All Contacts',
                    contacts
                })
            })
            .catch(err => {
                res.status(500).send(`Error: ${err}`)
            })
}

let newContact = (req, res) => {
    res.render('layouts/main', {
        view: 'contact',
        title: 'Contact Us'
    })
}

let create = (req, res) => {
    let {
        name,
        email,
        enquiry
    } = req.body
    let contact = {
        name,
        email,
        enquiry
    }
    // contacts.push(contact)
    // console.log(contacts)
    ContactModel.create(contact)
        .then(contact => {
            res.render('layouts/main', {
                view: 'success',
                title: 'Thanks!'
            })
        })
        .catch(err => {
            res.status(500).send(`Error: ${err}`)
        })
}

module.exports = {
    newContact,
    create,
    index
}