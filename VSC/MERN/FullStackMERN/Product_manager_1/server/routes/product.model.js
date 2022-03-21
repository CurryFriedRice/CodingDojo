const ProductController = require("../controllers/product.controller")

module.exports = (app) =>
{
    // app.get("/api", ProductController.index);
    // app.get("/api/product", ProductController.showAll),
    app.post("/api/products", ProductController.createProduct)
}