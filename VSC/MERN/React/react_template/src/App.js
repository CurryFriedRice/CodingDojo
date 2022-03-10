import React, {useState } from  'react';
import logo from './logo.svg';
import './App.css';
import BoxForm  from './Components/BoxFormComponent';
import Box from './Components/BoxComponent';
import isValidColor from "./js/isValidColor";

function App() {
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([])
  
  
  const addNewColor = (color, newSize) =>
  {
    if(isValidColor(color))
    {
      setColors([...colors,color] );
      setSize([...size,newSize]);
    }else
    {

    }
  }

  let boxes = []
  for(let i = 0; i < colors.length; i++)
  {
    boxes = colors.map((color, index) => <Box color={color} size={size[index]}></Box>)
  }

  return (
    <div className="App" >
      <header className="App-header">
        <BoxForm onAddNewColor={addNewColor}/>
        <div className="d-flex">{boxes}</div>
      </header>
    </div>
  );
}

export default App;
