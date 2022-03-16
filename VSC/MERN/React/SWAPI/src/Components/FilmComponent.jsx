import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

const Film = props => 
{
    const [film, setFilm] = useState()
    const {idx} = useParams()

    useEffect (() => {    
        fetch(`https://swapi.dev/api/films/${idx}`)
            .then(res => res.json())
            .then(data => {
                if(data.detail === "Not found") throw("err");
                setFilm(data)
            }).catch(() => props.err());
    },[idx])
     
    return(
        <table className="table container text-light">
            {film === undefined ? 
            <p>"Loading"</p> :
            <>
            <tr>
                <th>Title: </th>
                <td>{film.title}</td>
            </tr>
            <tr>
                <th>Episode: </th>
                <td>{film.episode_id}</td>
            </tr>
            <tr>
                <th>Director: </th>
                <td>{film.director}</td>
            </tr>
            <tr>
                <th>Crawl: </th>
                <td>{film.opening_crawl}</td>
            </tr>
            </>}
            {}
        </table>
    )
}

export default Film