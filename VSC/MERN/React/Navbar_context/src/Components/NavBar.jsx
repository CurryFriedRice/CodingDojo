import React, {useContext} from "react"

import NameContext from './Context/NameContext';

const NavBar = props => 
{
    const Context = useContext(NameContext)

    return (
        <>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid d-flex justify-content-end">
                <a class="navbar-brand" href="#">Hello! {Context.username}</a>
            </div>
        </nav>
        </>
        )
}

export default NavBar