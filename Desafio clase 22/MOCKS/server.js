import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import generarProductos from "./index.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'views')));

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})

app.get('/', (req, res) => {
    res.render('views/index.html')
})

app.get('/api/productos-test', (req, res) => {
    res.json(generarProductos(5))
})
