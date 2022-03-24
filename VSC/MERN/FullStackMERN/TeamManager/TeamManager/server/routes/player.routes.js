//import the controller
const Player = require("../controllers/player.controller")

module.exports = app => {
    app.get("/api/players", Player.findAll) //You can over it to find the function
                                        //CHECKPOINT - test the route
    app.post("/api/players", Player.create) //You Have to use Postman to test
    app.get("/api/players/:id", Player.findOneWithID) // This :id is the req.params.id
    app.put("/api/players/:id/update", Player.update) // BE CONSISTENT WITH THESE
    // app.put("/api/players/update/:id", Note.update) // EITHER WORK
    app.delete("/api/players/:id/delete", Player.delete) // EITHER WORK
}   //import it to server.js
