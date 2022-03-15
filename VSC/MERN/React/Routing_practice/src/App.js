import React from  'react';
import 
{
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";

import Home from "./Components/HomeComponent"
import InputRoute from "./Components/InputRouteComponent"

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div className="App text-light">

      <h1>Routing Practice!</h1>
      <p>
        <Link to="/home">Home</Link>
        |
        <Link to="/Fizban">Fizban</Link>
         |
        <Link to="/Fizban/red/blue">Fizban/red/blue</Link>
        |
        <Link to="/4">4</Link>
      </p>

      <Switch> 
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/:input">
          <InputRoute />
        </Route>
        <Route exact path="/:input/:bgColor/:textColor">
          <InputRoute />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;