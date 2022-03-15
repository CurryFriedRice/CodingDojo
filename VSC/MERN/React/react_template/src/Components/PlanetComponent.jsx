import React, {useState, useEffect} from "react";
import 
{
  Link,
} from "react-router-dom";

const Planet = props => 
{

    return(
        <table className="table container text-light">
            <tr>
                <th>Name: </th>
                <td>{props.Planet.name}</td>
            </tr>
            <tr>
                <th>Gravity: </th>
                <td>{props.Planet.gravity}</td>
            </tr>
            <tr>
                <th>Climate: </th>
                <td>{props.Planet.climate}</td>
            </tr>
            <tr>
                <th>Terrain: </th>
                <td>{props.Planet.terrain}</td>
            </tr>
        </table>
    )
}

export default Planet