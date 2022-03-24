
import react, {useEffect, useState} from 'react'
import axios from 'axios'
//IMPORTING CSS FROM MODULE

import {useHistory} from 'react-router-dom'

import PlayerNavBarComponent from '../components/playerNavBar.component'

export default (props) =>{
    
    const [name, setName] = useState("")
    const [position, setPosition] = useState('Forward')
    const [errList, setErrList] = useState([])
    const positions = ["Forward", "Midfielder", "Defender", "Goalkeeper"]
    const history = useHistory();

    const onSubmitHandler = (e) => 
    {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", {name: name, preferredPosition:position, gameStatus:{"stub":"undecided"} })
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => {
                // console.log(Object.keys(err.response.data.errors))
                // const keys = Object.keys(err.response.data.errors)
                const messages = Object.keys(err.response.data.errors).map(error => err.response.data.errors[error].message)
                setErrList(messages)
            })
        // console.log(name,position)
        // console.log("Use axios to finish adding to DB")
    }
    
    return (
        <div>
            <PlayerNavBarComponent />
            <h3>Add A New Player</h3>
            <div className="text-danger">{errList.map(error => <p>{error}</p>)}</div>
            <form onSubmit={onSubmitHandler}>
                <div className="mt-3">
                <input onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <div className="mt-3">
                <select onChange={e => setPosition(e.target.value)} value={position}>
                    {positions.map((pos, i) => <option key={i} value={pos}>{pos}</option>)}
                </select>
                </div >
                <div className="mt-3">
                    <button type="submit">Submit</button>
                </div>
            </form>
            {/* <p>{JSON.stringify(players)}</p> */}

        </div>
    )
}