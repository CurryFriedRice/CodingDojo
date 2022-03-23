import React, {useState, useEffect}  from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE
// import style from "./main.module.css"

import Form from '../components/Form' 

import {Link, useParams, useHistory} from 'react-router-dom'

export default (props) =>{
  
    return (
        <div>
            <p>USER NOT FOUND</p>
            <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
            <p><Link to="/authors/new">New Author</Link>  |  <Link to="/">Home</Link></p>
        </div>
    )
}
