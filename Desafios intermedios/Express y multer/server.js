const express = require('express')
const multer = require('multer')
const app = express()
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null,Date.now() + '-' +  file.originalname)
    },
    mimetype: function (req, file, cb) {
        cb(null, file.mimetype)
    }
})

var upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('file'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})

app.post('/uploadmultiple', upload.array('files'), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on("error", error => {
    console.log(error)
})