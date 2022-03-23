import logo from './logo.svg';
import './App.css';

import {
  Switch,
  Route,
  Redirect

} from 'react-router-dom'

// import axios from 'axios';

import Main from "./views/main.module"
import Create from "./views/create.module"
import Update from "./views/update.module"
import NotFound from "./views/notFound.module.jsx"


function App() {
  return (
    <div className="App">
        <h3>📚 Favorite Authors</h3>
        <hr/>
        <Switch>
          <Route exact path='/404'>
            <NotFound />
          </Route>
          <Route exact path='/authors'>
            <Main />
          </Route>
          <Route exact path='/authors/new'>
            <Create />
          </Route>
          <Route exact path='/authors/:id/edit'>
            <Update />
          </Route>
          <Route path="/">
            <Redirect to="/authors"/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
