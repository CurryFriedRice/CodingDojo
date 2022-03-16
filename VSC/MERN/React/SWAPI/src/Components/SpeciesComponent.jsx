import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

const Species = props => 
{
    const [species, setSpecies] = useState()
    const {idx} = useParams()

    useEffect (() => {    
        fetch(`https://swapi.dev/api/species/${idx}`)
            .then(res => res.json())
            .then(data => {
                if(data.detail === "Not found") throw("err");
                setSpecies(data)
            }).catch(() => props.err());
    },[idx])
     
    return(
        <table className="table container text-light">
            {species === undefined ? 
            <p>"Loading"</p> :
            <>
            <tr>
                <th>Name: </th>
                <td>{species.name}</td>
            </tr>
            <tr>
                <th>Lifespan: </th>
                <td>{species.average_lifespan }</td>
            </tr>
            <tr>
                <th>Eye Colors: </th>
                <td>{species.eye_colors}</td>
            </tr>
            <tr>
                <th>Language: </th>
                <td>{species.language}</td>
            </tr>
            {/* {JSON.stringify(species)} */}
            </>
            }
            
        </table>
    )
}

export default Species