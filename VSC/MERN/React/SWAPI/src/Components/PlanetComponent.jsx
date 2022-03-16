import React, {useState, useEffect} from "react";
import 
{
  Link,
  useParams
} from "react-router-dom";

const Planet = props => 
{
    const [planet, setPlanet] = useState()
    const {idx} = useParams()
    useEffect (() => {
        
        fetch(`https://swapi.dev/api/planets/${idx}`)
            .then(res => res.json())
            .then(data => {
                if(data.detail === "Not found") throw("err");
                setPlanet(data)
            }).catch(() => props.err());
    },[idx])
    

    return(
        <table className="table container text-light">
            <tr>
                <th>Name: </th>
                <td>{planet === undefined ? '' : planet.name}</td>
            </tr>
            <tr>
                <th>Gravity: </th>
                <td>{planet === undefined ? '': planet.gravity}</td>
            </tr>
            <tr>
                <th>Climate: </th>
                <td>{planet === undefined ? '' : planet.climate}</td>
            </tr>
            <tr>
                <th>Terrain: </th>
                <td>{planet === undefined ? '' : planet.terrain}</td>
            </tr>
        </table>
    )
}

export default Planet