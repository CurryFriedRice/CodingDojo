import './App.css';
import PersonCardComponent from "./Components/PersonCardComponent.js"
import User from './JS/User';

function App() {
  let userList = []
  userList.push(new User("Jane","Doe",45, "Brown"))
  userList.push(new User("John", "Smith", 88,"Brown"))
  userList.push(new User("Millard","Fillmore", 50, "Brown"))
  userList.push(new User("Maria", "Smith", 62, "Brown"))

  let UserJSX = [];
  for (const item of userList) {
    UserJSX.push(<PersonCardComponent user={item}/>)
  } 


  return (
    <div className="App">
      {UserJSX}
    </div>
  );
}



export default App;
