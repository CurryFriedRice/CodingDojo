import React, {useContext} from "react"

import NameContext from "./Context/NameContext"
const NameForm = props => 
{
    const Context = useContext(NameContext)
    return (
        <form>
            <div class="mb-3">
                <label class="form-label">Your Name:</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" onChange={(e) => Context.setUsername(e.target.value)} value={Context.username} />
            </div>
        </form>
    )
}

export default NameForm