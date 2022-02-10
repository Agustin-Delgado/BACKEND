let palabra = []
let tiempo
let i = 0
function mostrarLetras(palabra, tiempo, callback) {

    const myTimer = setInterval(() => {
        console.log(palabra[i])
        i++
        if (i === palabra.length) {
            i = 0
            clearInterval(myTimer)
            callback()
        }
    }, tiempo);

}
const fin = () => console.log('terminé')

console.log(mostrarLetras('hola', 0, fin))
console.log(mostrarLetras('2222', 1500, fin))
console.log(mostrarLetras('3333', 3000, fin))