const express = require("express")
const app = express();
const mongoose = require("mongoose")
const PORT = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the jokes routes function from our jokes.routes.js file
AllMyJokeRoutes = require("./server/routes/joke.routes");
// Pass in the app to All Jokes so the paths know what app they're using
AllMyJokeRoutes(app);

//Start the server to listen in a port.
app.listen(PORT, () => console.log("The server is all fired up on port 8000"));
