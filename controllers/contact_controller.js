const contacts = []

let newContact = (req, res) => {
    res.render('layouts/main', {
        view: 'contact',
        title: 'Contact Us'
    })
}

let create = (req, res) => {
    let {
        name,
        email
    } = req.body
    let contact = {
        name,
        email
    }
    // let contact = {
    //     email: req.body.email,
    //     name: req.body.name
    // }
    contacts.push(contact)
    console.log(contacts)
    res.render('layouts/main', {
        view: 'success',
        title: 'Thanks!'
    })
}

module.exports = { newContact, create }
