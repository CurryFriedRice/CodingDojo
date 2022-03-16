import React, {useState} from  'react';
import 
{
  Link,
  Route,
  Switch
} from "react-router-dom";
import {useParams} from "react-router"

import PersonComponent from "./PersonComponent"
import Planet from "./PlanetComponent"

const RenderResult = props => {
    
  return (
    <div>
      <Switch>
        <Route path="/people/:idx">
          <PersonComponent/>
        </Route>
        <Route path="/planets/:idx">
          <Planet/>
        </Route>
      </Switch>
    </div>
  );
}

export default RenderResult;