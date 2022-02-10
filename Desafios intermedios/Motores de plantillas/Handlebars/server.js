const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const PORT = 8080;
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'));

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),    
    })
)

app.set('view engine', 'hbs')


const persona = {
    nombre: 'Anashe',
    apellido: 'Good',
    edad: '22',
    email: 'dsad@DSADSA',
    telefono: '32443343'
}   


app.get('/', (req, res) => {
    res.render('main', {
        nombre: 'Alejandra',
        apellido: 'Martinez',
        edad: 29,
        email: 'alemtz@gmail.com',
        telefono: '+775 779955'

})
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})