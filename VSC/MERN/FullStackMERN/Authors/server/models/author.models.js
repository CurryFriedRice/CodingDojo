//server/models/SCHEMA.models.js
const mongoose = require('mongoose')

const AuthorSchema = mongoose.Schema({
    name: {            //With Validation
        type:String,
        required: [true, "{PATH} must be present"],
        minLength: [3, "{PATH} needs to be at least 3 characters long"]
    },
},{timestamps: true})   //Gets the timestamp

//Create the schema and export it
    //Two Lines
// const Note = mongoose.model("Author", AuthorSchema)
// module.exports = Note
    //One Line
// const Author = mongoose.model("Author", AuthorSchema)
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author
// module.exports = {Author : mongoose.model("Notes", NoteSchema)}