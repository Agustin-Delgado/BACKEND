const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const path    = require('path')
const handlebars = require('express-handlebars')
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const PORT = 8080;

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

const products = []
const messages = []
isProductsEmpty = true

io.on('connection', (socket) => {
    console.log('Usuario conectado con id: ' + socket.id)

    socket.emit('products', products)
    socket.emit('messages', messages)

    socket.on('product', (title, price, tumbnail) => {
        products.push({ title: title, price: price, tumbnail: tumbnail })
        io.sockets.emit('products', products)
        console.log(products)
    })

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
})

app.get('/', (req, res) => {
    res.render('layouts/index'),{
        isProductsEmpty: isProductsEmpty
    }
})

const server = httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})

