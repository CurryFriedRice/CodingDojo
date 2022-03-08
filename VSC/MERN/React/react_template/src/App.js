import logo from './logo.svg';
import './App.css';


function App() {
  const displayHeader = () => <h1>Hello Dojo!</h1>

  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h2>Thigs I need to do</h2>
      <ul>
        <li>Learn React</li>
        <li>Beat Elden Ring</li>
        <li>Exercise</li>
        <li>Find a Job</li>
        <li>Walk the dog</li>
      </ul>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header> */}
    </div>
  );
}

export default App;
