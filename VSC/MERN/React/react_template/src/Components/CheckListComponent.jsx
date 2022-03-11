import React, {useState} from "react"
import CheckListItem from "./CheckListItemComponent"

const CheckList = props => 
{
    // console.log(JSON.stringify(listItems)) 

    return(
        <ul>
            {props.listItems.map((item, idx) => <CheckListItem key={idx} ItemName={item} ItemId={idx} removeItem ={props.removeItem}/>)}
            {/* <CheckListItem ItemName="Gotta do something..." ItemID= {1}/> */}
            {/* {JSON.stringify(props.listItems)} */}
        </ul>
    )
}

export default CheckList