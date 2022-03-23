const Author = require("../controllers/author.controller")

module.exports = app => {
    app.get("/api/authors", Author.findAll)
    app.post("/api/authors", Author.create)
    app.get("/api/authors/:id", Author.findOneWithID)
    app.put("/api/authors/:id", Author.update)
    app.delete("/api/authors/:id/delete", Author.delete)
}