import React, {useState } from  'react';

const BoxForm = props => 
{
    const [colorInput, setColorInput] = useState("");
    const [colorErr, setColorErr] = useState("");
    const [size, setSize] = useState("");

    const submitHandler = (e) =>
    {
        e.preventDefault()
        //console.log(colorInput)
        props.onAddNewColor(colorInput,size);
        setColorInput("");
        setSize('');
    }

    const inputHandler = (e) => 
    {
        setColorInput(e.target.value);
    }
    const sizeHandler = (e) => 
    {
        setSize(e.target.value);
    }

    return(
        <fieldset>
            <form onSubmit={submitHandler}>
                <label>Color: </label>
                <input name="color" onChange={inputHandler} value={colorInput}></input>
                <label>Size: </label>
                <input name="size" onChange={sizeHandler} value={size}></input>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default BoxForm;