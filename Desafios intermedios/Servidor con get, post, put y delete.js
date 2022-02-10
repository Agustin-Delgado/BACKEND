const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let frase = "Frase inicial"
let nuevaPalabra
let fraseDividida
let pos

app.get('/api/frase', (req, res) => {
    res.json({ frase: frase });
})

app.get('/api/palabras/:pos', (req, res) => {
    fraseDividida = frase.split(' ');
    pos = req.params.pos;

    if (pos > fraseDividida.length || pos == 0) {
        res.status(400).json({ error: 'El parámetro está fuera de rango' });
    }
    else if (isNaN(pos)) {
        res.status(400).json({ error: 'El parámetro no es un número' });
    }
    else {
        res.json({ buscada: fraseDividida[pos - 1] });
    }
})

app.post('/api/palabras', (req, res) => {
    nuevaPalabra = req.body.palabra;
    frase = frase + ' ' + nuevaPalabra;
    res.json({ agregada: nuevaPalabra, pos: frase.split(' ').length });
})

app.put('/api/palabras/:pos', (req, res) => {
    pos = req.params.pos;
    nuevaPalabra = req.body.palabra;
    fraseDividida = frase.split(' ');
    fraseAnterior = fraseDividida[pos - 1];

    if (pos > fraseDividida.length || pos == 0) {
        res.status(400).json({ error: 'El parámetro está fuera de rango' });
    }
    else if (isNaN(pos)) {
        res.status(400).json({ error: 'El parámetro no es un número' });
    }
    else {
        fraseDividida[pos - 1] = nuevaPalabra;
        frase = fraseDividida.join(' ');

        res.json({ frase: frase, actualizada: nuevaPalabra, anterior: fraseAnterior });
    }
})

app.delete('/api/palabras/:pos', (req, res) => {
    pos = req.params.pos;
    fraseDividida = frase.split(' ');

    if (pos > fraseDividida.length || pos == 0) {
        res.status(400).json({ error: 'El parámetro está fuera de rango' });
    }
    else if (isNaN(pos)) {
        res.status(400).json({ error: 'El parámetro no es un número' });
    }
    else {
        const palabraEliminada = fraseDividida.splice(pos-1, 1);
        frase = fraseDividida.join(' ');
        res.json({ eliminada: palabraEliminada[0]});
    }
    // elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})