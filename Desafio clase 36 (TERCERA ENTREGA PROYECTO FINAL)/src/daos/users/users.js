import firebaseContainer from "../../container/firebaseContainer.js";

class userDaoFirebase extends firebaseContainer {
    constructor() {
        super('user', {
            name: String,
            password: String,
            email: String,
            cart: Array,
            orders: Array
        });
    }
}

export default userDaoFirebase;