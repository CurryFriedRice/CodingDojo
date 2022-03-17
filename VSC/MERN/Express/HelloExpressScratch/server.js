const express = require("express")
const app = express();
const PORT = 8000;


app.use( express.json());
app.use( express.urlencoded({extended: true}))

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    

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


