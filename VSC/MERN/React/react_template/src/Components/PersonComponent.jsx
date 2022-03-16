import React, {useState, useEffect} from "react";
import 
{
  Link,
  useParams,
} from "react-router-dom";

const Person = props => 
{
    const [character, setCharacter] = useState();
    const [homeworld, setHomeWorld] = useState();
    
    const {idx} = useParams();

    const setHomeworldLink = ()=> 
    {
        const url = homeworld.url.split('/');
        props.ChangeRoute(`/planets/${url[url.length-2]}`);
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${idx}`)
        .then(res => res.json())
        .then(data => {

            if(data.detail === "Not found") throw("err");
            else
            {
                setCharacter(data)
                fetch(data.homeworld)
                .then(res => res.json())
                .then(data => setHomeWorld(data));
            }
        }).catch((err) => props.err())
    },[idx])


    return(
        <table className="table container text-light">
            <tr>
                <th>Name: </th>
                <td>{character=== undefined ? '' : character.name}</td>
            </tr>
            <tr>
                <th>Weight: </th>
                <td>{character === undefined ? '' : character.mass} kg</td>
            </tr>
            <tr>
                <th>Eye Color: </th>
                <td>{character === undefined ? '' : character.eye_color}</td>
            </tr>
            <tr>
                <th>Homeworld: </th>
                <td>{homeworld === undefined?'' : <a href=''onClick={() => setHomeworldLink()}>{homeworld.name}</a>}</td>
            </tr>
            {/* <tr>{JSON.stringify(character)}</tr> */}
        </table>
    )
}

export default Person