const mongoose = require("mongoose");

//The model for a joke so each Joke that we make is consistent
const JokeSchema = new mongoose.Schema({
	setup: String,
	punchline: String
});

//Make a model called Joke that has uses JokeSchema as the document model.
const Joke = mongoose.model("Joke",JokeSchema);

module.exports = Joke;