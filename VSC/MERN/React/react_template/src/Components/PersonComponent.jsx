import React, {useState, useEffect} from "react";
import 
{
  Link,
} from "react-router-dom";

const Person = props => 
{
    const [homeworld, setHomeWorld] = useState();
    
    const homeworldURL =()=> 
    {
        let splitURL = homeworld.url.split('/')
        return `/${splitURL[splitURL.length-3]}/${splitURL[splitURL.length-2]}`
    }

    useEffect(()=>{

        fetch(props.Person.homeworld)
            .then(res => res.json())
            .then(data => setHomeWorld(data))
            
    },[homeworld])

    return(
        <table className="table container text-light">
            <tr>
                <th>Name: </th>
                <td>{props.Person.name}</td>
            </tr>
            <tr>
                <th>Weight: </th>
                <td>{props.Person.mass} kg</td>
            </tr>
            <tr>
                <th>Eye Color: </th>
                <td>{props.Person.eye_color}</td>
            </tr>
            <tr>
                <th>Homeworld: </th>
                <td>{homeworld === undefined?'' :  <Link to={homeworldURL()}> {homeworld.name} </Link>}</td>
            </tr>
        </table>
    )
}

export default Person