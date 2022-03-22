const { response } = require("express");
const {Product} = require("../models/Product.model")


module.exports = {
    showAllProducts : (req, res) =>
    {
        Product.find({})
            .then(Product => res.json(Product))
            .catch(err => res.json(err))
    },
    getProductByID: (req,res) => 
    {
        // Product.findOne({_id:request.params.id})
        Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.json(err))
    },
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

