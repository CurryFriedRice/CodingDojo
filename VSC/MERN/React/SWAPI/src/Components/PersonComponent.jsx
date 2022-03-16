import React, {useState, useEffect} from "react";
import 
{
  Link,
  useParams,
  useHistory
} from "react-router-dom";

const Person = props => 
{
    const [character, setCharacter] = useState();
    const [homeworld, setHomeWorld] = useState();
    const {idx} = useParams();
    const history = useHistory();

    const updatePerson = () =>
    {
        fetch(`https://swapi.dev/api/people/${idx}`)
        .then(res => res.json())
        .then(data => {
            setCharacter(data)
            fetch(data.homeworld)
                .then(res => res.json())
                .then(data => setHomeWorld(data));
        })
    }

    useEffect(() => {
        updatePerson()
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
                <td><a href=''onClick={() => history.push(`/planets/${idx}`)}>{homeworld === undefined?'' : homeworld.name}</a></td>
            </tr>
        </table>
    )
}

export default Person