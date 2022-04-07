import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
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
        url: 'mongodb+srv://agustin:agustin@cluster0.tvqim.mongodb.net/ecommerce?retryWrites=true&w=majority',
    },
    fileName: {
        messages: path.resolve(__dirname, '../data/messages.txt')
    },
    firebase: {
        privateKey: path.resolve(__dirname, '../private/clase26-26f5c-firebase-adminsdk-9z6sm-27f3c2c4c9.json')
    },
    facebook: {
        clientID: '1317032415450260',
        clientSecret: 'd8e3f29f815d1967ef90371af37bbe5c',
        callbackURL: 'http://localhost:8080/auth/facebook/callback'
    },
    jwt: {
        privateKey: 'myprivatekey'
    }
}

export default config;