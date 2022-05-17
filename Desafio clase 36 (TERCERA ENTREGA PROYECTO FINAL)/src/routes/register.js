import express from 'express';
import { getEncrypt } from '../../../../PORTFOLIO/Mercadolibre clone/my-app/backend/utils/getCrypto.js';
import { usersDao } from '../daos/index.js';

const register = express.Router();

register.get("/", (req, res) => {
    res.render("../views/register.ejs");
});

register.post("/", (req, res) => {
    const userData = {
        name: req.body.name,
        telephone: req.body.telephone,
        address: req.body.address,
        password: getEncrypt(req.body.password),
        email: req.body.email,
        age: req.body.age,
        cart: [],
        orders: []
    }
    const id = req.body.email;

    id ? usersDao.findById(id).then(user => {
        if (user) {
            res.render("../views/register-error.ejs");
        } else {
            usersDao.insertOne(userData, id).then(() => {
                console.log("Usuario creado");
                res.redirect("/login");
            });
        }
    }) : res.sendFile("../views/register-error.ejs");

});

export default register;