//server/models/SCHEMA.controllers.js
const { appendFile } = require("fs");
const Player = require("../models/Player.models")
// 8. -> CHECKPOINT CREATE A ROUTE

//As A key value pair <- My preferred way
module.exports = {
    findAll : (req,res) => //R of CRUD - READ 
    {
        Player.find()
            .then(allPlayers => res.json(allPlayers)) //Implicit Return
            .catch(err => res.status(400).json({Message: "Something went wront", error: err}))
    }, //<---- REMEMBER TO PUT THE COMMA AFTER

    findOneWithID : (req,res) =>{
        Player.findOneWithID(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.status(400).json(err))
    },

    create : (req,res) =>
    {
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.status(400).json(err));
    },
    
    update : (req,res) => {
        Player.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(data => res.json(data))
            .catch(err => res.status(400).json({err}))
    },

    delete : (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(data=> res.json(data))
            .catch(err => res.status(400).json(err))
    }
    
    

}