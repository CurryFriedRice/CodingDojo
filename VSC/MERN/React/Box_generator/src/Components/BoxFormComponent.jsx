import React, {useState } from  'react';
import isValidColor from '../js/isValidColor';
import isValidSize from "../js/isValidSize"

const BoxForm = props => 
{
    const [colorInput, setColorInput] = useState("");
    const [colorErr, setColorErr] = useState("");
    const [size, setSize] = useState("");
    const [sizeErr, setSizeErr] = useState("");

    const submitHandler = (e) =>
    {
        e.preventDefault()
        console.log(isValidColor(colorInput))
        let isValid = true;
        if(!isValidColor(colorInput))
        {
            isValid = false;
            setColorErr("Select a valid Color")
        }else{setColorErr('');}
        if(!isValidSize(size))
        {
            isValid = false;
            setSizeErr("Size is invalid! numbers only")
        }else
        {      
        setSizeErr("");}

        if (isValid)
        {
            setColorInput("");
            setSize('');
      
            props.onAddNewColor(colorInput,size);
        }
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
                <div>
                {colorErr != '' ? <div>{colorErr}</div> : ''}
                <label>Color: </label>
                <input name="color" onChange={inputHandler} value={colorInput}></input>
                </div>
                <div>
                {sizeErr != '' ? <div>{sizeErr}</div> : ''}
                <label>Size: </label>
                <input name="size" onChange={sizeHandler} value={size}></input>
                </div>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default BoxForm;