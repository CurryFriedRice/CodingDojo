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