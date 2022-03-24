
import react, {useEffect, useState} from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE

import {Link} from 'react-router-dom'

export default (props) =>{
    const [players,setPlayers] = useState([])

    return (
        <div className="d-flex">
        <Link to="/players">List</Link>
        <p> &nbsp;&nbsp;| &nbsp;&nbsp;</p>
        <Link to="/players/new"> Add New Player</Link>
        </div>
    )
}