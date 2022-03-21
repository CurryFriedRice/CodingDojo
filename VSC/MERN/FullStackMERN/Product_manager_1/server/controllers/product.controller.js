const { response } = require("express");
const {Product} = require("../models/Product.model")


module.exports = {
    // showAll : (req, res) =>
    // {
    //     res.json(Product);
    // },
    createProduct : (req,res) => 
    {
        const {title, price, description} = req.body
        Product.create({
            title,
            price,
            description
        })
            .then(Product => res.json(Product))
            .catch(err => res.json(err));
    }
}

