//Our controller that has all the CRUD operations that we feed to the app
const JokeController = require("../controllers/joke.controller");


//All the routes and what should happen when we visit that route
module.exports = app => {
  //ALl of these are CRUD operations HTTP actions
  //GET, SET, POST, PUT, DELETE ect...
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};