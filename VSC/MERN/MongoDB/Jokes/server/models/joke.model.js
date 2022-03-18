const mongoose = require("mongoose");

//The model for a joke so each Joke that we make is consistent
const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "A Setup to your joke is required"],
		minlength:[3, "Setup must be at least 3 characters long"]
	},
	punchline:
	{
		type: String,
		required: [true, "A Punchline to your joke is required"],
		minlength:[10, "Punchline must be at least 3 characters long"]
	}
});

//Make a model called Joke that has uses JokeSchema as the document model.
const Joke = mongoose.model("Joke",JokeSchema);

module.exports = Joke;