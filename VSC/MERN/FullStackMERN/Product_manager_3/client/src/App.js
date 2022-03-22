import React from 'react'

import Main from "./views/Main"

import
{
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
