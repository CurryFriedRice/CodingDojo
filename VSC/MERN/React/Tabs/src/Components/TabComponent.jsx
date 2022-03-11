import React, { useState } from "react";

const Tab = (props) => {
  const [TabData] = useState(props.TabData);


  const clickHandler =(e)=>
  {
    props.onSelect(TabData.TabContent)
    bounceItem(document.getElementById(TabData.TabName))
  }

  const bounceItem = (elem) =>
  {
    console.log(elem);
    var id=null;
    var pos = 0;
    clearInterval(id);
   
    const upFrame = () => 
    {
      if(pos < -10 )
      {
        clearInterval(id);
        id=setInterval(downFrame,10)
      }else
      {
        pos -=3;
        elem.style.top = pos+'px'
        console.log(pos);
      }
    }
    const downFrame = () => 
    {
      if(pos > 0) 
      {
        clearInterval(id);
        elem.style.top = '0px'
      
      }
      else
      {
        pos +=3;
        elem.style.top = pos+'px'
      }
    }

    clearInterval(id);
    id = setInterval(upFrame, 10)
  }

  return (
    <div className="stylish" id={TabData.TabName}>
      <div onClick={(e) => clickHandler(e)}>
        {TabData.TabName}
      </div>
    </div>
  );
};

export default Tab;
