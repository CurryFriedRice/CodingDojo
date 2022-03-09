import React, {useState } from  'react';

const BoxForm = props => 
{
    const [colorInput, setColorInput] = useState("");
    const [colorErr, setColorErr] = useState("");

    const submitHandler = (e) =>
    {
        e.preventDefault()
        //console.log(colorInput)
        props.onAddNewColor(colorInput);
        setColorInput("");
    }

    const inputHandler = (e) => 
    {
        setColorInput(e.target.value);
    }

    return(
        <fieldset>
            <form onSubmit={submitHandler}>
                <label>Color: </label>
                <input name="color" onChange={inputHandler} value={colorInput}></input>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default BoxForm;