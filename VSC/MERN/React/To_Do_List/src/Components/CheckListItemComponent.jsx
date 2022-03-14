import React, {useState} from "react"



const CheckListItem = props =>
{
    const [checked, setChecked] = useState(localStorage.getItem(props.ItemId) === 'true')

    const toggleCheck = (e) =>
    {
        // e.preventDefault();
        setChecked(!checked);
        localStorage.setItem(props.ItemId, !checked)
        
    }
    return (
        <li  className="d-flex align-items-center">
            <div>{props.ItemId}</div>
            {checked ? 
                <div className="text-decoration-line-through">{props.ItemName}</div>: 
                <div>{props.ItemName}</div>
            }
            
            <input type="checkbox" onChange={(e) => toggleCheck(e)} checked={checked}></input>
            <button onClick={(e) => props.removeItem(e, props.ItemId)}>DELETE</button>
        </li>
    )
}

export default CheckListItem