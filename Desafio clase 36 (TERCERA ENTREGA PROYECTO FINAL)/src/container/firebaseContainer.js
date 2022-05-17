import admin from 'firebase-admin'
import config from '../utils/config.js'

const privateKey = config.firebase.privateKey

try {
    admin.initializeApp({
        credential: admin.credential.cert(privateKey)
    })
} catch (error) {
    console.log(error)
} finally {
    console.log('Firebase inicializado')
}
const db = admin.firestore()

class firebaseContainer {
    constructor(collectionName) {
        this.collection = db.collection(collectionName)
    }

    async listAll() {
        try {
            const listAll = await this.collection.get()
            let docs = listAll.docs

            const response = docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            return response

        } catch (error) {
            console.log(error)
        }
    }

    async listCart(id) {
        try {
            const listAll = await this.collection.doc(id).get()
            let docs = listAll.data()

            const response = {
                id: listAll.id,
                ...docs
            }
            return response

        }
        catch (error) {
            console.log(error)
        }
    }

    async findById(id) {
        try {
            const findById = await this.collection.doc(id).get()
            return findById.data()
        } catch (error) {
            console.log(error)
        }
    }

    async getCartItems(id) {
        try {
            const findById = await this.collection.doc(id).get()
            return findById.data().cart
        } catch (error) {
            console.log(error)
        }
    }

    async listOne(id) {
        try {
            const listOne = await this.collection.doc(id).get()
            return listOne.data()
        } catch (error) {
            console.log(error)
        }
    }

    async insertOne(data, id) {
        if (id) {
            try {
                const insertOne = await this.collection.doc(id).set(data)
                return insertOne
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
                const insertOne = await this.collection.add(
                    {
                        id: data.id,
                        ...data
                    }
                )
                return insertOne
            } catch (error) {
                console.log(error)
            }
        }
    }

    async updateOne(id, data) {
        try {
            const update = await this.collection.doc(id).update(data)
            return update
        } catch (error) {
            console.log(error)
        }
    }

    async deleteOne(id) {
        console.log(id)
        try {
            const deleteOne = await this.collection.doc(id).delete()
            return deleteOne
        } catch (error) {
            console.log(error)
        }
    }
}

export default firebaseContainer;


