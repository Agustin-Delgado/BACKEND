const express = require('express')
const app = express()
const PORT = 8080;
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.engine('ejs', require('ejs').__express);

let persons = []

app.get('/', (req, res) => {
    res.render('main.ejs', {
        persons: persons
    })
})

app.post('/persons', (req, res) => {
    persons.push(req.body)
    console.log(persons)
    res.render('main.ejs', {
        persons: persons
    })
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})