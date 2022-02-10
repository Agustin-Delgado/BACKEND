const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

function getName(){
    return productos.map(producto => producto.nombre).join(', ')
     
}

function totalPrice(){
    return productos.reduce((total, producto) => total + producto.precio, 0)
}

function averagePrice(){
    return productos.reduce((total, producto) => total + producto.precio, 0) / productos.length
}

function minorPrice(){
    return productos.reduce((minor, producto) => (minor.precio < producto.precio) ? minor : producto)
}

function majorPrice(){
    return productos.reduce((major, producto) => (major.precio > producto.precio) ? major : producto)
}

myObject = {
    Names: getName(),
    totalPrice: totalPrice(),
    averagePrice: averagePrice(),
    minorPrice: minorPrice(),
    majorPrice: majorPrice()
}
console.log(myObject)