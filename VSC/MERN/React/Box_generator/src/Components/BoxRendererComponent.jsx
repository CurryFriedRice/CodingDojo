import React, { useState } from  'react';

const BoxRenderer = props => 
{
    let boxJSX = []
    let boxJSX2 = []

    for(const color of props.colors)
    {
        let size = `${props.size[0]}px`
        let styleString = {
            margin: "10px",
            backgroundColor: color,
            height: size,
            width: size,
    }
        boxJSX.push(<div style={styleString}></div>)
    }

    for(let i = 0; i < props.colors.length; i++)
    {
        let size = `${props.size[i]}px`
        let styleString = 
        {
            margin: "10px",
            backgroundColor: props.colors[i],
            height: size,
            width: size
        }
        boxJSX2.push(<div style={styleString}/>)
    }


    return(
        <fieldset>
            <div>Hello Boxes Go here!</div>  
            {/* <div>{JSON.stringify(props)}</div> */}
            {/* <div class="d-flex">{boxJSX}</div> */}
            <div>{props.colors}</div>
            <div>{props.colors.length}</div>
            <div>{props.size}</div>
            <div>{boxJSX2}</div>
        </fieldset>
    )
}
export default BoxRenderer;