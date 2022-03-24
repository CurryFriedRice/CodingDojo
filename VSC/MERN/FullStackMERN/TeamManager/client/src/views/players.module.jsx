
import react, {useEffect, useState} from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE

import {Link} from "react-router-dom"
import PlayerNavBarComponent from '../components/playerNavBar.component'

export default (props) =>{
    const [players,setPlayers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(res => {
            console.log(res.data)   //Logs the data to see if we're even getting it
            setPlayers(res.data)
        })
        .catch(err => console.log(err))
    },[])
    
    const onDeleteHandler = (e, delPlayer) =>{
        e.preventDefault();
        if(window.confirm("ALERT! You are about to delete "+ delPlayer.name))
        {
            console.log("User should be deleted")
            axios.delete(`http://localhost:8000/api/players/${delPlayer._id}/delete`)
                .then(data => {console.log(data)
                    console.log(delPlayer)
                    console.log(players.filter(player => player._id !== delPlayer._id))
                    setPlayers(players.filter(player => player._id !== delPlayer._id))
                })
                .catch(err => console.log(err))
        }else 
            console.log("User is not deleted")
    }

    return (
        <div>
            {/* <Link to="/players/new">Add a new player</Link> */}
            <PlayerNavBarComponent/>
            <h3>🏅All players</h3>
            <table className="table text-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Preferred Position</th>
                    <th scope="col">Actions</th>
                </tr>
                {players.map(player => {return(
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.preferredPosition}</td>
                        <td><button className='bg-danger btn btn-danger' onClick={(e) => onDeleteHandler(e, player)}>DELETE</button></td>
                    </tr>
                    )}
                )}
            </table>

            {/* <p>{JSON.stringify(players)}</p> */}

        </div>
    )
}