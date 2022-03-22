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
    },
    updateProduct : (req,res) =>
    {
        const id = req.params.id;
        const {title, price, description} = req.body;
        console.log(id);
        Product.findByIdAndUpdate(id,{title: title, price: price, description:description})
            .then(Product => {
                console.log(Product)
                res.json({"Success":"Successfully updated", "id": id})
            })
            .catch(err => res.json(err));
    },
    deleteProduct : (req,res) => 
    {
        Product.deleteOne({_id: req.params.id})
        .then(data => {
            console.log("Successfully Deleted")
            res.json({"Message": "Item Successfully Deleted"})
        })
        .catch(err => {
            console.log("Failed to Delete")
            res.json({"err": err})
        })
    }
}

