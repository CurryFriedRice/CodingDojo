const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

require('./server/config/mongoose.config')

//Middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}))

//App routes
// require("./server/routes/person.routes")(app);
require("./server/routes/product.model")(app)

//Listen to that route
app.listen(PORT, () => console.log(`LOCKED AND READY TO ROCK ON PORT: ${PORT}`) );

