const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/contacts', { useNewUrlParser: true })
mongoose.connection.on('error', error => console.log(error))

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())

// Routes
app.use(router)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})