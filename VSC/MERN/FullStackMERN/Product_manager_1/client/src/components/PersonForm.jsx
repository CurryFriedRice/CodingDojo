import React, {useState} from 'react'
import axios from 'axios'

export default props => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/people", {firstName, lastName})
            .then(res => console.log("response", res))
            .catch(err => console.log("error",err));
    }

    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <p> 
                <label>First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} ></input>
            </p>
            <p> 
                <label>Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} ></input>
            </p>
            <button type="submit">Submit</button>
        </form>
    )
}