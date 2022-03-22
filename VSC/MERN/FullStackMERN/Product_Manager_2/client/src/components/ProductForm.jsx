import React, {useState} from 'react'
import axios from 'axios'

export default props => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const onSubmitHandler = (e) =>{
        // e.preventDefault();
        axios.post("http://localhost:8000/api/products", {title, price, description})
            .then(res => {
                console.log("response", res)
                setPrice(0)
                setTitle('')
                setDescription("")
                
            })
            .catch(err => console.log("error",err));
    }

    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
            <p> 
                <label>Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} ></input>
            </p>
            <p> 
                <label>Price:</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} ></input>
            </p>
            <p> 
                <label>Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} ></input>
            </p>
            <button type="submit">Submit</button>
        </form>
    )
}