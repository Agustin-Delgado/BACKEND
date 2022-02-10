const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    if (peticion.url == '/') {
        respuesta.end('<h1>Hola Mundo</h1>');
    }
    else if (peticion.url == "/productos") {
        respuesta.end('<h1>Productos</h1>');
   }
})


const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
