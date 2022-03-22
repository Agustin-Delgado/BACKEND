const path = require('path');

module.exports = {
    sqlite3: {
        client: 'better-sqlite3',
        connection: { filename: path.resolve(__dirname, '../db/ecommerce.db3') },
        useNullAsDefault: true
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'products'
        }
    },
    mongodb: {
        url: 'mongodb://localhost:27017/messages',
    },
    fileName: {
        messages: path.resolve(__dirname, '../data/messages.txt')
    }
}

