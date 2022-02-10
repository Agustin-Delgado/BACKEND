const express = require('express')
const app = express()
const PORT = 8080;
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
    res.render('main.pug', {
        min: req.query.min,
        nivel: req.query.nivel,
        max: req.query.max,
        titulo: req.query.titulo,
        color : req.query.color
    })
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})