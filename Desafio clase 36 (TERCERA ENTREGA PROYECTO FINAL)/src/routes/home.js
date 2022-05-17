import express from 'express';
import { productDao, usersDao } from '../daos/index.js';

const home = express.Router();

home.get("/", async (req, res) => {
    if (req.isAuthenticated()) {

        const getProducts = productDao.listAll()

        return res.render("../views/index.ejs", {
            name: req.user.displayName ? req.user.displayName : req.user.name,
            photo: req.user.photos ? req.user.photos[0].value : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=64",
            email: req.user.emails ? req.user.emails[0].value : req.user.email,
            products: await getProducts
        });
    } else {
        return res.redirect("/login");
    }
});

home.get("/load-product", (req, res) => {
    if (req.isAuthenticated()) {
        return res.render("../views/load-product.ejs");
    } else {
        return res.redirect("/login");
    }
});

home.post("/load-product", (req, res) => {
    if (req.isAuthenticated()) {
        let product = {
            timestamp: new Date(),
            title: req.body.title,
            price: req.body.price,
            tumbnail: req.body.tumbnail,
            description: req.body.description,
            stock: req.body.stock,
        }

        productDao.insertOne(product)
        res.status(200).redirect("/");
    } else {
        return res.redirect("/login");
    }
});

home.get("/cart/add/:id", async (req, res) => {
    if (req.isAuthenticated()) {
        const cartData = await usersDao.getCartItems(req.user.email)
        productDao.listCart(req.params.id).then(product => {
            usersDao.updateOne(req.user.email, {
                cart: [...cartData, product]
            }).then(() => {
                res.redirect("/");
            })
        });
    }
});

home.get("/cart", (req, res) => {
    if (req.isAuthenticated()) {
        usersDao.findById(req.user.email).then(user => {
            res.render("../views/cart.ejs", {
                name: req.user.displayName ? req.user.displayName : req.user.name,
                photo: req.user.photos ? req.user.photos[0].value : "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=64",
                email: req.user.emails ? req.user.emails[0].value : req.user.email,
                products: user.cart
            });
        });
    } else {
        return res.redirect("/login");
    }
});

home.post("/cart/buy", (req, res) => {
    if (req.isAuthenticated()) {
        usersDao.findById(req.user.email).then(user => {
            usersDao.updateOne(req.user.email, {
                cart: []
            })
        }).then(() => {
            res.redirect("/");
        })
    }
});

export default home;