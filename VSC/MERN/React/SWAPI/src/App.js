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

import SearchForm from "./Components/SearchformComponent"
import RenderResult from './Components/RenderResultComponent';

function App() {
  const Categories = ["People", "Planets", "Films", "Species", "Starships", "Vehicles"]
  
  const [result, setResult] = useState('')
  // const [history] = useHistory();
  

  return (
    <BrowserRouter>
    <div className='App text-light'>
    <SearchForm Categories={Categories}/>
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