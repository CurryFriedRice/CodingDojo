import react, {useState}  from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE
// import style from "./main.module.css"

import Form from '../components/Form' 

import {Link, useHistory} from 'react-router-dom'

export default (props) =>{
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory();

    const addItem = (e, authorName) =>
    {
        e.preventDefault();
        console.log("adding Item", authorName)
        axios.post("http://localhost:8000/api/authors", {name: authorName})
            .then(res => {
                console.log(res.data)
                history.push(`/`)
            })
            .catch(err => {
                const errorResponse = err.response.data.err.errors; // Get the errors from err.response.data
                // console.log(errorResponse)
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                //Const messages = Object.keys(errors).map(error => errors[error])
                // // console.log(errorArr)
                // // Set Errors
                setErrors(errorArr);
            })
    } 
  
    return (
        <div>
            <Link to="/authors">Home</Link>
            <h3>Add new Author</h3>
            {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
            <Form onSubmitHandler={addItem} name={name} setName={setName}/>
        </div>
    )
}
