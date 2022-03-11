import React, {useState, useEffect} from  'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from "./Components/ToDoFormComponent"
import CheckList from "./Components/CheckListComponent"
import Timer from "./Components/TimerComponent"


const App = () => {
  const [listItems, setListItems] = useState(localStorage.getItem("toDoList").split(","))
  
  const splitString = () => 
  {
    
  }
  const AddItem = (newListItem) => 
  {
 
    // console.log(newListItem)

    setListItems([...listItems, newListItem]);
    // console.log(newListItem)
    // console.log(listItems)
    
    //setListItems([...listItems, newListItem]);


  }

  const removeItem = (e, itemIndex) =>
  {
    e.preventDefault();
    console.log(itemIndex);
    setListItems(listItems.filter((item,idx)=> idx !=itemIndex))

  }

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    console.log("**********************************")

    // setListItems(localStorage.getItem("toDoList").split(","))


    console.log("EVERY REFRESH:", listItems)
    localStorage.setItem("toDoList", listItems)
    console.log("LISTPOPULATION:", localStorage.getItem("toDoList"))
    console.log("LISTPOPULATION:", localStorage.getItem("toDoList").split(","))

  
  });

  // useEffect(() => {
  //   //Runs on the first render
  //   //And any time any dependency value changes
  //   console.log(localStorage.getItem("toDoList"))
  //   // setListItems(localStorage.getItem("toDoList"))
  //   console.log(localStorage.getItem("WHATTHEACTULAFUCK"))
  //   if(!localStorage.getItem("toDoList") == '')
  //   {
  //     setListItems(localStorage.getItem("toDoList").split(","))
  //   }
  // }, [listItems]);


  return (
    <div className="App" >
      <header className="container">
        <div className="d-flex align-top justify-content-center text-white">
        <ToDoForm addItem={AddItem}/>
        </div>
        <div className="d-flex align-top justify-content-center text-white">
        <CheckList listItems={listItems} removeItem={removeItem}/>
        </div>

        {/* <Timer/> */}
      </header>
    </div>
  );
}

export default App;



