const e = require('express');
const express = require('express');

const app = express();

const PORT = 8080;

const frase = 'Hola mundo cómo están'
let fraseDividida
let num;

app.get('/api/frase', (req, res) => {
    res.json({frase: frase});
})

app.get('/api/letras/:num', (req, res) => {
    fraseDividida = frase.split('');
    num = req.params.num;

    if(num > fraseDividida.length || num == 0) {
        res.status(400).json({error: 'El parámetro está fuera de rango'});
    }
    else if(isNaN(num)){
        res.status(400).json({error: 'El parámetro no es un número'});
    }
    else{
        res.json({letra: fraseDividida[num-1]});
    }
})

app.get('/api/palabras/:num', (req, res) => {
    fraseDividida = frase.split(' ');
    num = req.params.num;

    if(num > fraseDividida.length || num == 0) {
        res.status(400).json({error: 'El parámetro está fuera de rango'});
    }
    else if(isNaN(num)){
        res.status(400).json({error: 'El parámetro no es un número'});
    }
    else{
        res.json({palabra: fraseDividida[num-1]});
    }
})

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})