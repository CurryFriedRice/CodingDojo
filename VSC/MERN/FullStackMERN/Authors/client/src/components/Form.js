import React, {useState} from 'react'
import {Link} from 'react-router-dom'


const Form = (props) =>{
    // const [name, setName] = useState(props.name)
    const {name, setName} = props
    return(
        <div>
            <form onSubmit={(e) => props.onSubmitHandler(e, name)}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                <button onClick={e => e.preventDefault()}><Link to="/authors">Cancel</Link></button>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}
export default Form