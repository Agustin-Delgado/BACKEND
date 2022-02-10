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


app.get('/datos', (req, res) => {
    res.render('main.ejs', {
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