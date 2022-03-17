//Imports Joke as the document MODEL that the jokes can interact with.  
const Joke = require("../models/joke.model");

////Just another way to set the CRUD operations
// module.exports.findAllJokes = (req, res) => {
//   Joke.find()
//     .then(allDaJokes => res.json({ Jokes: allDaJokes }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleJoke = (req, res) => {
// 	Joke.findOne({ _id: req.params.id })
// 		.then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewJoke = (req, res) => {
//   Joke.create(req.body)
//     .then(newlyCreatedJoke => {console.log(req.body)
//         return res.json({ Joke: newlyCreatedJoke })})
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedJoke => res.json({ Joke: updatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };  

// module.exports.deleteAnExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

//Export a an object with keys that are CRUD functions
module.exports =
{
  //Get ALL jokes ever written
  findAllJokes : (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ Jokes: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  },
  //Find a single Joke using the id
  findOneSingleJoke : (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  //Create a new joke from a JSON object
  createNewJoke : (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => {console.log(req.body)
        return res.json({ Joke: newlyCreatedJoke })})
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  },

  //Update an existing joke that matches an ID
  //Replaces everything inside of it to update
  updateExistingJoke : (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ Joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  },
  
  //With an ID delete an existing joke
  deleteAnExistingJoke : (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  }


}