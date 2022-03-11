import React,{useState} from "react"

const ToDoForm = props => 
{
    const [item, setItem] = useState("")

    const inputHandler = (e) => 
    {
        setItem(e.target.value)

    }
    const submitHandler = (e) =>
    {
        e.preventDefault();
        // console.log(props.addItem("ITEM"))
        props.addItem(item);
        // console.log(item)
        setItem("");

    }

    return(
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <label>New To Do item:</label>
                <input onChange={inputHandler} value={item}></input>
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default ToDoForm