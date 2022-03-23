import React, {useState, useEffect}  from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE
// import style from "./main.module.css"

import Form from '../components/Form' 

import {Link, useParams, useHistory} from 'react-router-dom'

export default (props) =>{
    const [name, setName] = useState("name")
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            const newName = res.data.authors.name
            console.log(newName)   //Logs the data to see if we're even getting it
            setName(newName)
        })
        .catch(err => {
            console.log(err)
            // console.log("HOOOONK")
            history.push("/404")
        })
    },[])

    const updateItem = (e, authorName) =>
    {
        e.preventDefault();
        console.log("adding Item", authorName)
        axios.put(`http://localhost:8000/api/authors/${id}`, {name: authorName})
            .then(res => {
                console.log(res.data)
                history.push(`/`)
            })
            .catch(err => {
                console.log(err)
            })
    } 
  
  
    return (
        <div>
            {/* {JSON.stringify(name)} */}
            <Link to="/authors">Home</Link>
            <h3>Edit Existing Author</h3>
            <Form onSubmitHandler={updateItem} name={name} setName={setName}/>
        </div>
    )
}
