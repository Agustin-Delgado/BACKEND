import firebaseContainer from '../../container/firebaseContainer.js'

class productDaoFirebase extends firebaseContainer {
    constructor() {
        super("products")
    }
}

export default productDaoFirebase;