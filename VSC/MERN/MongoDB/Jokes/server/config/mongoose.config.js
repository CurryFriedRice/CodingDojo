const mongoose = require("mongoose");

//Connect to the mongoose server and create/use the Jokes_API model to post and get documents from
mongoose.connect("mongodb://localhost/Jokes_API", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));