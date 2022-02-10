const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const PORT = 8080;

const messages = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const server = httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})

io.on('connection', (socket) => {
    console.log('Usuario conectado con id: ' + socket.id)

    socket.emit('messages', messages)

    socket.on('message', (data) => {
        messages.push({ socketid: socket.id, text: data })
        io.sockets.emit('messages', messages)
        console.log(messages)
    })
})