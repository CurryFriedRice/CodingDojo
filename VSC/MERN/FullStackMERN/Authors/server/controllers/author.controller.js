const req = require("express/lib/request")
const Author = require("../models/author.models")

module.exports = {
    findAll : (req,res) =>{
        Author.find()
            .then(data => {
                console.log(data)
                res.json({authors:data})
            })
            // .then(allNotes => res.json({authors: allNotes}))
            .catch(err => res.status(400).json({ err}))
    },
    findOneWithID : (req,res) =>{
        Author.findById(req.params.id)
            .then(data => res.json({authors:data}))
            .catch(err => res.status(400).json({err}))
    },

    create : (req,res) => {
        Author.create(req.body)
            .then(data => res.json({authors:data}))
            .catch(err => res.status(400).json({ err}))
    },

    update : (req,res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(data => res.json({authors:data}))
            .catch(err => res.status(400).json({err}))
    },

    delete : (req,res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(data => res.json({authors: data, message: "successfully deleted item"}))
            .catch(err => res.status(400).json({ err}))
    }
}