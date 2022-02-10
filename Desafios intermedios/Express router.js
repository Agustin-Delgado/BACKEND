const express = require('express')
const router  = express.Router()
const app = express()
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)
app.use(express.static('public'))

const mascotas = []

router.get('/mascotas', (req, res) => {
    res.json(mascotas)
})
router.post('/mascotas', (req, res) => {
    const { nombre, raza, edad } = req.body
    mascotas.push({
        nombre,
        raza,
        edad
    })
    res.json(mensaje = 'Mascota agregada') 
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})