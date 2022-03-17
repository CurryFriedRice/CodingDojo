


//So typically we'd use the ReactDOM.render.
ReactDOM.render(
    <React.strictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.strictMode>
)

Routing we're just passing in values from the URL to the component

#
```
npm install react
npm install react-router-dom@5

npm install express

npm init -y
npm install mongoose express
```
ni server.js  ##Windows CL
touch server.js ##bash CL

# react && react-router-dom

UseState    - Helps us save data to a variable
useEffect   - Helps us do a thing when a state finishes rendering or finishes running

useHistory - Helps us change the url path by pushing History
useParams  - Helps us fetch variables in the url route

Mongoose Mongo

# EXPRESS
```js
//Head
const express = require("express")
const app = express();
const PORT = 8000;

//Middleware
app.use( express.json());
app.use( express.urlencoded({extended: true}))

// req.params - gets URL path queries
// req.body - gets JSON objects
// res.JSON - returns a JSON object

//Routes
app.get("/api", (req,res) => {
    res.json({"HELP": "ME"})
})

app.get("/api/users", (req,res) => {
    res.json(users)
})

app.get("/api/users/:index", (req,res) => {
    res.json(users[req.params.index])
})

//Always EOF
app.listen(PORT, ()=>console.log(`READY TO ROCK ON PORT ${PORT}`))
```

making post requests from PostMan
* Select Body
* switch it to Raw
* select the type JSON

OR 

x-www-form.urlencoded
KEY: TEST  value: 123