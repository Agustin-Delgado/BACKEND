import { faker } from '@faker-js/faker';
faker.locale = 'es';

function generarProductos(cantidad) {
    let productos = [];
    for (let i = 0; i < cantidad; i++) {
        productos.push({
            nombre: faker.commerce.productName(),
            codigo: faker.random.alphaNumeric(10),
            precio: faker.commerce.price(),
            stock: faker.datatype.number(),
            tumbnail: faker.image.imageUrl()

        });
    }
    return productos;

}

export default generarProductos;

