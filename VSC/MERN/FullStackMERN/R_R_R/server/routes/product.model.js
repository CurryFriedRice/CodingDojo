const ProductController = require("../controllers/product.controller")

module.exports = (app) =>
{
    // app.get("/api", ProductController.index);
    app.get("/api/products", ProductController.showAllProducts),
    app.post("/api/products", ProductController.createProduct)
    app.get("/api/products/:id", ProductController.getProductByID),
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
    // app.delete("/api/products/:id", ProductController.updateProduct)
}