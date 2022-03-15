import React, {useState, useEffect} from "react";
import 
{
  Link,
} from "react-router-dom";

const Film = props => 
{
  
    return(
        <table className="table container text-light">
            <tr>
                <th>Title: </th>
                <td>{props.Film.title}</td>
            </tr>
            <tr>
                <th>Episode: </th>
                <td>{props.Film.episode_id}</td>
            </tr>
            <tr>
                <th>Director: </th>
                <td>{props.Film.director}</td>
            </tr>
            <tr>
                <th>Homeworld: </th>
                <td>{props.Film.opening_crawl}</td>
            </tr>
        </table>
    )
}

export default Film