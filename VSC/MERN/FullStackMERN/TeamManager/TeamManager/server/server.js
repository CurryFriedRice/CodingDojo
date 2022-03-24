const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "team_manager"       //This can be whatever you want it to be
//--------------------------------------

//Middleware
app.use(express.json(), cors(), express.urlencoded({extended: true}))   //Check server at this point
//

//5. DB Connection
// Longhand 
// const config = require("./config/mongoose.config")
// config(DB)

//ShortHand 
require("./config/mongoose.config")(DB) //Hand the DB to the Config


//8 Routes - Check case Sensitivity
require("./routes/player.routes")(app)   //Pass the App to the route so the app knows to listen to it 
//You can then Visit the listened to port and get the info

app.listen(PORT,() => console.log(`🌟🌟🌟Server up and ready to rock on port ${PORT}🌟🌟🌟`)) //nodemon server.js