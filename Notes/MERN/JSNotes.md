# 2022-03-09

Keys must exist in object
Destructuring
        Key   Key       Object
const {Blah, Blah2} = person;
    Key also becomes a const Var

       Key  Var   Key     Object
const {Blah:Yes, Blah2} = person;



const animals = ["One", "Two", "Three", "Four"]
const [,varname]


Targets the index of the array split via commas


Spread operator
//Take all the values of the object and output the copy
const objectCopy = {...object}

const [...value2] = array1;


JSON.stringify(Object)
- Turn an object into a JSON String Object so you can print it out.



# 2022-03-10
- When you start your react Project Open up the Dev tools

const [State, setState] = useState('')
const [State, setState] = useState(props.state)

setState([...State, newState])


# 2022-03-17
Event loop
Data goes in
Data goes out
The server runs asynchronously and can continue processing multiple requests




# 2022-03-21
"For in" is for items IN an array
"for of" is for every KEY in an array

The .notation implies that we know what the key is
use square brackets to search for a parameter

let keys = Object.keys(doggo) //Returns am array of keys in the object

let values = Object.values(doggo) // Returns an array of values in the object JUST the values

Object.entries(doggo) // returns a 2D array of Key value[] pairs

doggo.hasOwnProperty("PROPERTY") // Returns a true/false
//It's o[1] because just tries the key and if it can it can