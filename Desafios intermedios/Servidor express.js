const express = require('express');
const { stringify } = require('querystring');

const app = express();

const PORT = 8080;

let counter = 0;
let fyh = {fyh: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`};
app.get('/', (req, res) => {
    res.send('<h1 style="color:blue":>Bienvenidos al servidor express</h1>');
})
app.get('/visitas', (req, res) => {
    req ? counter++ : null
    res.send(`<h1> La cantidad de visitas es: ${counter} </h1>`);
})

app.get('/fyh', (req, res) => {
    res.send(`<h1> La fecha y hora es: ${JSON.stringify(fyh)} </h1>`);
})

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})