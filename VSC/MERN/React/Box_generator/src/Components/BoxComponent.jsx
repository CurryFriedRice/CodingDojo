import React, {Component, useState} from "react"

const Box = props => 
{
    const Styling = {
        margin: "10px",
        backgroundColor: props.color,
        height: `${props.size}px`,
        width: `${props.size}px`,
    
    }
    console.log(props)
    return <div style={Styling}></div>
}

export default Box;