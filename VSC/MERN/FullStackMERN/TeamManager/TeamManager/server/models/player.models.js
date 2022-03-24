//server/models/SCHEMA.models.js
const mongoose = require('mongoose')
const StatusSchema = require('./status.model')


// const StatusSchema = new mongoose.Schema({
//     gameStatus:{       //Default Values
//         type:String,
//         default: "undecided"
//     }
// },{timestamps: true})   //Gets the timestamp

const PlayerSchema = new mongoose.Schema({
    name: {            //With Validation
        type:String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} needs to be at least 3 characters long"]
    },
    preferredPosition: {          //Just a field IT's A DROPDOWN
        type:String,
        required: [true, "{PATH} Must Be Selected"]
    },
    gameStatus:{       //Default Values
        type:{}
    }
},{timestamps: true})   //Gets the timestamp

//Create the schema and export it
    //Two Lines
const Player = mongoose.model("Player",PlayerSchema)
module.exports = Player
    //One Line
// module.exports.Note = new mongoose.model("Notes", NoteSchema)