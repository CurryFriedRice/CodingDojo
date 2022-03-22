const ProductController = require("../controllers/product.controller")

module.exports = (app) =>
{
    // app.get("/api", ProductController.index);
    app.get("/api/products", ProductController.showAllProducts),
    app.get("/api/products/:id", ProductController.getProductByID),
    app.post("/api/products", ProductController.createProduct)
}