const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/api/sumar/:num1/:num2', (req, res) => {
    res.json({suma: parseInt(req.params.num1) + parseInt(req.params.num2)});
})

app.get('/api/sumar', (req, res) => {
    res.json({suma: parseInt(req.query.num1) + parseInt(req.query.num2)});
})

app.get('/api/operacion/:num1:operador:num2', (req, res) => {
    res.json({operador: req.params.operador,
        resultado: eval(req.params.num1 + req.params.operador + req.params.num2)});
})

app.post('/api', (req, res) => {
    res.json({ok: 'post'});
})

app.put('/api', (req, res) => {
    res.json({ok: 'put'});
})

app.delete('/api', (req, res) => {
    res.json({ok: 'delete'});
})

const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})
