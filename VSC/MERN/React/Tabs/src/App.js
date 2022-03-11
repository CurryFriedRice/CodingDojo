import React, {useState } from  'react';
import logo from './logo.svg';
import './App.css';
import Tab from "./Components/TabComponent"
import TabContent from "./Components/TabContentsComponent"

function App() {
  const [currentMessage, setCurrentMessage] = useState("")

  //Normally this would be made up of objects in this case TabObject. 
  const TabData = [
    {
      TabName: "Ninjas",
      TabContent: "Ninja should have the benevolence to protect men of justice since there are lots of good and respectable people in the world. - Masaaki Hatsumi."
    },
    {
      TabName: "Curious Cats", 
      TabContent: "Curiosity killed the cat, but satisfaction brought it back,"
    },
    {
      TabName: "DieMonster.wmv",
      TabContent: "Die monster-MOnster! you don't belong-long in-in this world-orld!"
    },
    {
      TabName: "Bee Movie",
      TabContent: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."
    },    {
      TabName: "The Room",
      TabContent: "Oh Hi, Mark!"
    },
    {
      TabName: "Connections",
      TabContent: "The blood of the covenant is thicker than the water of the womb."
    }
  ]

  const onSelect = (TabContent) => 
  {
    setCurrentMessage(TabContent);
  }

  let mappedTabs = []
  return (
    <div className="App" >
      <header className="container">
        <div className="d-flex align-top justify-content-center text-white">
        {
          TabData.map(element => <Tab TabData={element} onSelect={onSelect}></Tab>)
        }
        </div>
        <div className="d-flex align-top justify-content-center text-white">
        <TabContent TabContent={currentMessage}></TabContent>
        </div>

      </header>
    </div>
  );
}

export default App;