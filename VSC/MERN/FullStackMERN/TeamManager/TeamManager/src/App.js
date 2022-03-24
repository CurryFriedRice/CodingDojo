import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

import Players from "./views/players.module"
import Create from "./views/create.module"
import Game from "./views/game.module"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div><Link to="/players">Manage Players</Link> | <Link to="/status/game_1">Manage Player Status</Link></div>
        <Switch>

          <Route exact path="/players">
            <Players />
          </Route>

          <Route exact path="/players/new">
            <Create />
          </Route>

          <Route exact path="/status/:gameName">
            {/* <GameStatus /> */}
            {/* <div>Status</div> */}
            <Game />
          </Route>

          <Route exact path="/">
            <Redirect to="/players" />  
          </Route>


        </Switch>
      </header>
    </div>
  );
}

export default App;
