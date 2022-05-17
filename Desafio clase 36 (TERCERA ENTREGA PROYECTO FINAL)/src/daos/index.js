import messageDaoMongodb from '../daos/messages/messajes.js';
import userDaoFirebase from '../daos/users/users.js';
import productDaoFirebase from './products/products.js';

export const usersDao = new userDaoFirebase;
export const messageDao = new messageDaoMongodb;
export const productDao = new productDaoFirebase;


