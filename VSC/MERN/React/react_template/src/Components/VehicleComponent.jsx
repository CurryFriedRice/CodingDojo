import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

const Vehicles = props => 
{
    const [vehicle, setVehicle] = useState()
    const {idx} = useParams()

    useEffect (() => {    
        fetch(`https://swapi.dev/api/vehicles/${idx}`)
            .then(res => res.json())
            .then(data => {
                if(data.detail === "Not found") throw("err");
                setVehicle(data)
            }).catch(() => props.err());
    },[idx])
     
    return(
        <table className="table container text-light">
            {vehicle === undefined ? 
            <p>"Loading"</p> :
            <>
            <tr>
                <th>Name: </th>
                <td>{vehicle.name}</td>
            </tr>
            <tr>
                <th>Manufacturer: </th>
                <td>{vehicle.manufacturer}</td>
            </tr>
            <tr>
                <th>Consumables: </th>
                <td>{vehicle.consumables}</td>
            </tr>
            <tr>
                <th>Cost in Credits: </th>
                <td>{vehicle.cost_in_credits}</td>
            </tr>
            {/* {JSON.stringify(vehicle)} */}

            </>}
            {}
        </table>
    )
}

export default Vehicles