const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded())

// Routes
app.use(router)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})