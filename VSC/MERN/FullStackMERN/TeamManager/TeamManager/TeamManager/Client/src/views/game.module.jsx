
import react, {useEffect, useState} from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE

import {Link, useParams} from "react-router-dom"

export default (props) =>{
    const [players,setPlayers] = useState([])
    const games = ["game_1", "game_2", "game_3"]
    const {gameName} = useParams();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(res => {
            console.log(res.data)   //Logs the data to see if we're even getting it
            setPlayers(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const updatePlayer = (e, id, value) => {
        e.preventDefault();
        
        let newGameStatus = {}
        newGameStatus[gameName] = value;

        axios.put(`http://localhost:8000/api/players/${id}/update`, 
        {"gameStatus": 
            newGameStatus
        })
            .then(res => {
                console.log(res)
                setPlayers(players.map(player => {
                    if(player._id === res.data._id)
                        return res.data;
                    return player;
                }))
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            {/* <Link to="/players/new">Add a new player</Link> */}
            <div className="d-flex justify-content-around">
                {games.map(game => <Link to={`/status/${game}`}>{game}</Link>)}
            </div>
            {JSON.stringify(gameName)}
            <table>

            {players.map((player)=> {return (
                <tr>
                    <td>
                        <p key={player._id}>{player.name} </p>
                    </td>
                    <td>
                        {player.gameStatus.hasOwnProperty(gameName) && player.gameStatus[gameName] === "playing" ? <button type="button" className="btn btn-success" onClick>Playing</button> : <button onClick={(e) => updatePlayer(e,player._id, "playing")} className="btn btn-outline-success">Playing</button> }
                        {player.gameStatus.hasOwnProperty(gameName) && player.gameStatus[gameName] === "not playing" ? <button className="btn btn-danger">Not Playing</button> : <button onClick={(e) => updatePlayer(e,player._id, "not playing")} className="btn btn-outline-danger">Not Playing</button> }
                        {!player.gameStatus.hasOwnProperty(gameName) || player.gameStatus[gameName] === "undecided" ? <button className="btn btn-warning">undecided</button> : <button onClick={(e) => updatePlayer(e,player._id, "undecided")} className="btn btn-outline-warning">undecided</button> }
                        {/* || player.gameStatus[gameName] === "undecided" */}
                    </td>
                </tr>
                )}
                )}
            </table>
            {/* <p>{JSON.stringify(players)}</p> */}

        </div>
    )
}