class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
        return this.mascotas
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(libroNombre, libroAutor) {
        this.libros.push({ nombre: libroNombre, autor: libroAutor })
        return this.libros
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }
}

const usuario = new Usuario('Jorge', 'Perez', [{ nombre: 'Codigo limpio', autor: 'Robert C. Martin' }], ['Perro', 'Gato'])
console.log(usuario.getFullName())
console.log(usuario.addMascota('Iguana'))
console.log(usuario.countMascotas())
console.log(usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien'))
console.log(usuario.getBookNames())