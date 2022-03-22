const mongoose =  require('mongoose')

mongoose.connect("mongodb://localhost/product_manager",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Database Connection Established"))
    .catch((err)=> console.log("there was an err", err))