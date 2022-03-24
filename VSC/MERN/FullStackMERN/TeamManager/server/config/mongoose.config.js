//server/config/mongoose.config.js
const mongoose = require('mongoose')

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(res => console.log(`💹💹💹Connection to ${DB} Successful💹💹💹`))
        .catch(err => console.log(`🛑🛑🛑Connection to ${DB} Failed🛑🛑🛑\n`, err))
}