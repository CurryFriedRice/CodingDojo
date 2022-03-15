import React, {useState} from 'react'
import NameContext from './Context/NameContext';

const Wrapper = props => 
{
    const [username, setUsername] = useState('Nope')

    return (
        <NameContext.Provider value={{username,setUsername}} >
            {props.children}
        </NameContext.Provider >
    )
}

export default Wrapper;