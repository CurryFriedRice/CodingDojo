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
