import React, {useState} from  'react';
import 
{
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import img404 from "../static/img/lost.gif"
import PersonComponent from "./PersonComponent"
import Planet from "./PlanetComponent"
import Film from "./FilmComponent"
import Species from './SpeciesComponent';
import StarShip from './StarshipsComponent';
import Vehicle from "./VehicleComponent"

const RenderResult = props => {
  const history = useHistory()

  const err = () =>
  {
    history.push('/404');
  }

  const ChangeRoute = (route) => 
  {
    history.push(route);
  }

  return (
    <div>
      <Switch>
        <Route path="/people/:idx">
          <PersonComponent err={err} ChangeRoute={ChangeRoute}/>
        </Route>
        <Route path="/planets/:idx">
          <Planet err={err} ChangeRoute={ChangeRoute}/>
        </Route>
        <Route path="/films/:idx">
          <Film err={err} ChangeRoute={ChangeRoute}/>
        </Route>
        <Route path="/species/:idx">
          <Species err={err} ChangeRoute={ChangeRoute}/>
        </Route>
        <Route path="/starships/:idx">
          <StarShip err={err} ChangeRoute={ChangeRoute}/>
        </Route>
        <Route path="/vehicles/:idx">
          <Vehicle err={err} ChangeRoute={ChangeRoute}/>
        </Route>
        <Route path="/404">
          <h1>404</h1>
          <img src={img404} />  
        </Route>
      </Switch>
    </div>
  );
}

export default RenderResult;