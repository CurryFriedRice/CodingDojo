import React, {useState } from  'react';
import logo from './logo.svg';
import './App.css';
import BoxForm  from './Components/BoxFormComponent';
import Box from './Components/BoxComponent';


function App() {
  const [colors, setColors] = useState([]);
  const colorList = [];
  const addNewColor = (color) =>
  {
    console.log(color)
    colorList.push(...colors,color)
    setColors(colorList);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <BoxForm onAddNewColor={addNewColor}/>
        <Box colors={colors}/>
      </header>
      
    </div>
  );
}

export default App;
