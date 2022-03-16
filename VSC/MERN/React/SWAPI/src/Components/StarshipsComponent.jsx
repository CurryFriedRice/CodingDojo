import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

const StarShip = props => 
{
    const [starShip, setStarShip] = useState()
    const {idx} = useParams()

    useEffect (() => {    
        fetch(`https://swapi.dev/api/starships/${idx}`)
            .then(res => res.json())
            .then(data => {
                if(data.detail === "Not found") throw("err");
                setStarShip(data)
            }).catch(() => props.err());
    },[idx])
     
    return(
        <table className="table container text-light">
            { starShip=== undefined ? 
            <p>"Loading"</p> :
            <>
            <tr>
                <th>Name: </th>
                <td>{starShip.name}</td>
            </tr>
            <tr>
                <th>Model: </th>
                <td>{starShip.model }</td>
            </tr>
            <tr>
                <th>Starship Class: </th>
                <td>{starShip.starship_class}</td>
            </tr>
            <tr>
                <th>Consumables: </th>
                <td>{starShip.consumables}</td>
            </tr>
            {/* {JSON.stringify(starShip)} */}
            </>
            }
            
        </table>
    )
}

export default StarShip