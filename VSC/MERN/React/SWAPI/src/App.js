import React, {useEffect, useState} from  'react';
import 
{
  BrowserRouter,
  Link,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";

import logo from './logo.svg';
import obiwan from './static/img/obi-wan.jpg';
import './App.css';
// import axios from 'axios';

import SearchForm from "./Components/SearchformComponent"
// import Person from "./Components/PersonComponent"
// import Planet from "./Components/PlanetComponent"
// import Film from "./Components/FilmComponent"
import RenderResult from './Components/RenderResultComponent';

function App() {
  const Categories = ["People", "Planets", "Films", "Species", "Starships", "Vehicles"]
  
  const [result, setResult] = useState('')
  // const [history] = useHistory();

  useEffect(() => 
  {
    console.log("Help")
    fetch(`https://swapi.dev/api${window.location.pathname.toLowerCase()}`)
      .then(res => res.json())
      .then(data => 
        data.detail ? 
        setResult({"err": "These aren't the droids you're looking for"})
        : setResult(data)
      )
      
  },[])

  const SearchData = (category, idx) =>
  {
    console.log("Where are you!")
    fetch(`https://swapi.dev/api${window.location.pathname.toLowerCase()}`)
    .then(res => res.json())
    .then(data => 
      data.detail ? 
      setResult({"err": "These aren't the droids you're looking for"})
      : setResult(data) 
    )
  }

  const RenderSwitch = () => 
  {
    return (  
      
    <Switch>
      {/* <Route path="/people/:id">
        <Person Person={result}/>
      </Route>
      <Route path="/planets/:id">
        <Planet Planet={result}/>
      </Route>
      <Route path="/films/:id">
        <Film Film={result}/>
      </Route>
      <Route path="/species/:id">
        <p>species</p>
        <p>{JSON.stringify(result)}</p>

      </Route>
      <Route path="/starships/:id">
        <p>starships</p>
        <p>{JSON.stringify(result)}</p>

      </Route>
      <Route path="/vehicles/:id">
        <p>vehicles</p>
        <p>{JSON.stringify(result)}</p>
      </Route> */}
    </Switch>
    )

  }


  return (
    <BrowserRouter>
    <div className='App text-light'>
      <SearchForm Categories={Categories}/>
      {result.err ? 
      <>
        <h1>{result.err}</h1>
        <img src={obiwan}/>  
      </>
      : ''
    }
    <Switch>
      <Route to="/:category/:idx">
        <RenderResult/>
      </Route>
    </Switch>
    {/* <div>{JSON.stringify(result)}</div> */}
    </div>
    </BrowserRouter>
  );
}

export default App;