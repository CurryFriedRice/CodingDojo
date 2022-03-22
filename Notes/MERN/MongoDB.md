# Mongo DB Notes


use DB_NAME - USE that DB or CREATE it if it doesn't exist
db.dropDatabase() - Drop the current Database

db.createCollection(STRING_NAME) - Create a collection of string name
show Collections - Show the collection of data
db.COLLECTION.insertOne({KEY:VALUE OBJECTS}) - Inserts an object that looks like the following
db.COLLECTION.insertMany({}) - 

db.COLLECTION.find({}) - WITHOUT a value will find all
db.COLLECTION.find({KEY: VALUE}) - Match that key value


longhand vs Shorthand for import filepaths
const blah = require(FILEPATH)
blah(app)
vs
Requrire(FILEPATH)(app)
This is because it returns a functions that we can call later



# Creating a Server Space
```
mkdir server
cd server

touch server.js
npm init -y


```

```js 
//server.js
const express = require("express")
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({extended:true}))


//1. Connect MongoDB with the server
require("./config/mongoose.config")


require("./routes/SCHEMA.routes")(app)
//vs
const routes = ("./routes/SCHEMA.routes")
routes(app)




app.listen(PORT, () => console.log(`>>>> Locked and Loaded on ${PORT} and ready to rock`))


```
``` js Mongoose Config
const Mongoose = require('mongoose')
const DB_NAME = "goose_db"


```

```js SCHEMA.models
// IMPORT MONGOOSE to build a model
const mongoose = require("mongoose")


//the schema , rules that the DB follows
const gooseSchema =  new mongoose.Schema({
    KEY: VALUE,
    KEY: 
    {
		type: String,
		required: [true, "A Punchline to your joke is required"],
		minlength:[10, "Punchline must be at least 3 characters long"]
	}

}, {timestamps: true})

//the model - used to make actual queries to the DB
const Goose = mongoose.model("Goose", gooseSchema);

//Export the model Acts as the intermeidary to make queries
module.exports = Goose;
```

```js SCHEMA.controllers.js
//--- CONTROLLER WITH ALL THE CRUD ---
const SCHEMA = require('../models/SCHEMA.Models')

module.exports = 
{
    findAllSchema ; (req,res) => 
    {
        SCHEMA.find()
            .then(allDaSCHEMAs => res.json({SCHEMAS: allDaSCHEMAs}))
            .catch(err => res.json({message: "Something went wrong", error:err}))
    }
}

```

```js Mongoose Routes
const SCHEMAController = require('../controllers/SCHEMA.controllers')




```


CHECKPOINT When you make the connection

