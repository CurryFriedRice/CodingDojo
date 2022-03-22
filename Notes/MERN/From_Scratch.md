# 0. Navigate/Create your project Directory
* Right Click Open git bash
* Open folder in VSCode

# 1. Create a new Server.js file
```
touch server.js
```
# 2. Initialization
In console Line
```
npm init -y
npm i express mongoose cors
touch .gitignore
```

# 3. Folder Structure
```
Server
    Config
        mongoose.config.js
    Controllers
        SCHEMA.controllers.js
    Models
        SCHEMA.models.js
    Routes
```

# 4. Server.js

```js
const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "notes_db"       //This can be whatever you want it to be
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
require("./routes/note.routes")(app)   //Pass the App to the route so the app knows to listen to it 
//You can then Visit the listened to port and get the info

app.listen(PORT,() => console.log(`🌟🌟🌟Server up and ready to rock on port ${PORT}🌟🌟🌟`)) //nodemon server.js
```


# 5. Server Config
```js server/config/mongoose.config.js
const mongoose = require('mongoose')

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(res => console.log(`💹💹💹Connection to ${DB} Successful💹💹💹`))
        .catch(err => console.log(`🛑🛑🛑Connection to ${DB} Failed🛑🛑🛑\n`, err))
}
```

# 6. Models
```js server/models/SCHEMA.models.js
const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {            //With Validation
        type:String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} needs to be at least 3 characters long"]
    },
    content: {          //Just a field
        type:String,
    },
    isImportant:{       //Default Values
        type:Boolean,
        default: false
    }
},{timestamps: true})   //Gets the timestamp

//Create the schema and export it
    //Two Lines
const Note = mongoose.model("Note", NoteSchema)
module.exports = Note
    //One Line
module.exports.Note = new mongoose.model("Notes", NoteSchema)

```

# 7. Controllers - the CRUD operators
```js server/models/SCHEMA.controllers.js
const Note = require("../models/Note.models")
// 8. -> CHECKPOINT CREATE A ROUTE

//Individually
module.exports.findAllNotes = (req,res) => {
    Note.find()
        .then(allNotes => res.json({notes: allNotes})) // {"notes":All Notes} Can be object/array in json
        .catch(err => res.json({Message: "Something went wront", error: err}))
}

//As A key value pair <- My preferred way
module.exports = {
    findAll : (req,res) => //R of CRUD - READ 
    {
    Note.find()
        .then(allNotes => res.json({notes: allNotes})) //Implicit Return
        .catch(err => res.json({Message: "Something went wront", error: err}))
    }, //<---- REMEMBER TO PUT THE COMMA AFTER
}
```

# 8. Routes
```js routes
    //import the controller
    const Note = require("../controllers/note.controller")

    module.exports = app => {
        app.get("/api/notes", Note.findAll) //You can over it to find the function
                                            //CHECKPOINT - test the route
        app.post("/api/notes", Note.Create) //You Have to use Postman to test
        app.get("/api/notes/:id", Note.findOneWithID) // This :id is the req.params.id
        app.put("/api/notes/:id/update", Note.update) // BE CONSISTENT WITH THESE
        // app.put("/api/notes/update/:id", Note.update) // EITHER WORK
        app.delete("/api/notes/:id/delete", Note.delete) // EITHER WORK
    }   //import it to server.js
    
```


# 9. Controllers - the CRUD operators PT2
```js server/models/SCHEMA.controllers.js
const Note = require("../models/Note.models")
// 8. -> CHECKPOINT CREATE A ROUTE

//Individually
module.exports.findAllNotes = (req,res) => {
    Note.find()
        .then(allNotes => res.json({notes: allNotes})) // {"notes":All Notes} Can be object/array in json
        .catch(err => res.json({Message: "Something went wront", error: err}))
}

//As A key value pair <- My preferred way
module.exports = {
    findAll : (req,res) => //R of CRUD - READ 
    {
    Note.find()
        .then(allNotes => res.json({notes: allNotes})) //Implicit Return
        .catch(err => res.json({Message: "Something went wront", error: err}))
    }, //<---- REMEMBER TO PUT THE COMMA AFTER
    
    //🈁🈁 NEW STUFF------------------- AFTER STEP 10: FILL OUT THE REST OF CRUD
    createNote: (req.res) =>    //C of CRUD - CREATE
    {
        console.log(req.body)
        Note.create(req.body)
            .then(newNote => res.json(newNote))
            .catch(err => {
                console.log(err)
                return res.json({Message: "Something Went wrong", error: err})
                });
    },
    findOneWithID : (req,res) => //R of CRUD - READ 
    {   
        console.log(req.params)
        Note.findByID(req.params.id)    //this should match "/api/:id"
            .then(note => res.json({data: note})) //Implicit Return
            .catch(err => res.json({Message: "Something went wrong", error: err}))
    },
    
    update : (req,res) => 
    {
        Note.findByIDAndUpdate(req.params.id, req.body, {
            new: true,              //ONLY IF IT'S NEW
            runValidators: true     //Tell it to run Validators
        })
            .then(updatedNote => res.json({"message": "Note Successfully Updated","data": note}))
            .catch(err=> res.json({"message":"There was an error", error: "err"))
    },
    deleteById : (req,res) =>
    {
        // Note.DeleteOne({_id:req.params.id})
        Note.findByIdAndDelete(req.params.id)
            .then(res => res.json({"message": "Successfully Deleted", data:res}))
            .catch(err => res.json({"message": "Failed to Delete", error:err})
    } 

    //----------------------------
}("software engineer" OR "developer")
```
# 10. Postman
1. Launch Postman
2. Create a path to 'http://localhost:8000/api/CALL'
    * Should Match the routes you made above
3. Set request to POST
4. Set data to raw => JSON
``` JSON
    {
        // Case Sensitive and if it doesn't match schema it won't go through
        "title": "Field",
        "content": "content good to go",
        "isImportant": false
    }
```
5. If it is endlessly loading then check CONTROLLERS to see if they are responding
6. DO NOT LEAVE POSTMAN UNTIL ALL ROUTES ARE TESTED!

# -----FULL CRUD BACK END COMPLETE-----