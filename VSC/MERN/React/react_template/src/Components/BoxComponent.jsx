import React, { useState } from  'react';

const Box = props => 
{
    let boxJSX = []
    for(const color of props.colors)
    {
        let styleString = {
            margin: "10px",
            backgroundColor: color,
            height: '128px',
            width: '128px'
    }
        boxJSX.push(<div style={styleString}>{color}</div>)
    }

    return(
        <fieldset>
            <div>Hello Boxes Go here!</div>  
            <div>{JSON.stringify(props)}</div>
            <div class="d-flex">
            {
                boxJSX
            }
            </div>
            <div>Help!</div>
        </fieldset>
    )
}
export default Box;