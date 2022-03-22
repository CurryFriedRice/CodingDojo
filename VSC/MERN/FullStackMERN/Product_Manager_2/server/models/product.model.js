const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [6, "Name of product must be at least 6 characters"],
        required: [true, "Name of product is required"]
    },
    price: {
        type:Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        minlength: [6, "description of product must be at least 6 characters"],
        required: [true, "description of product is required"]
    }
},{timestamps:true});

module.exports.Product = mongoose.model("Product",ProductSchema);