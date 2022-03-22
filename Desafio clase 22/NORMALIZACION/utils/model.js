const fs = require('fs');
const { schema, normalize, denormalize } = require("normalizr");
const util = require("util");

module.exports = class Modelo {

    constructor(fileRoute) {
        this.fileRoute = fileRoute
    }

    async getNextId() {
        const data = await this.listarTabla();
        let nextId = 1;
        if (data.length > 0) {
            nextId = data[data.length - 1].id + 1;
        }
        return nextId;
    }

    async insertarArticulo(data) {
        try {
            const dataFile = await fs.promises.readFile(this.fileRoute, 'utf8')
            const dataJson = JSON.parse(dataFile)
            const nextId = await this.getNextId()
            data.id = nextId
            dataJson.push(data)
            await fs.promises.writeFile(this.fileRoute, JSON.stringify(dataJson))
        } catch (error) {
            console.log(error)
        }
    }

    async listarTabla() {
        try {
            const data = await fs.promises.readFile(this.fileRoute, 'utf8')
            const dataJson = JSON.parse(data)

            const author = new schema.Entity("author", {}, { idAttribute: "id" });
            const post = new schema.Entity("post", { author: author });
            const posts = new schema.Array('posts', {
                mensajes: post
            });

            const normalizedData = normalize(dataJson, posts);

            return normalizedData;

        } catch (error) {
            console.log(error)
        }
    }


    async denormalizar(data) {
        const author = new schema.Entity("author", {}, { idAttribute: "id" });
        const post = new schema.Entity("post", { author });
        const messages = new schema.Array(post);

        const normalizedData = denormalize(data, messages);

        return util.inspect(normalizedData, false, 12, true);

    }
}

