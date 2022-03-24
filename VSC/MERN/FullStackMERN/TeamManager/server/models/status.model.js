//server/models/SCHEMA.models.js
const mongoose = require('mongoose')



const StatusSchema = new mongoose.Schema({
    gameName:{       //Default Values
        type:String,
        required: [true, "{PATH} is required"]
    },
    playing:{       //Default Values
        type:String,
        default: "undecided"
    }
},{timestamps: true})   //Gets the timestamp

//Create the schema and export it
    //Two Lines
// const Status = mongoose.model("status",StatusSchema)
module.exports = StatusSchema
    //One Line
// module.exports.Note = new mongoose.model("Notes", NoteSchema)