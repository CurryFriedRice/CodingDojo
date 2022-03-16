import React, {useState} from  'react';
import 
{
  Link,
  useHistory,
} from "react-router-dom";

const SearchForm = props => {
    const [category, setCategory] = useState('people')
    const [idx, setIdx] = useState('');
    const history = useHistory();
    const submitForm = (e) =>
    {
        e.preventDefault();
        console.log("Form Submitted")
        // props.Search(category.toLowerCase(),idx);
        // props.setURL(`/${category}/${idx}`)
        history.push(`/${category}/${idx}`)
    }
      
  return (
    <div>
        <form onSubmit={submitForm}>
            <label>Search for:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
                {props.Categories.map((cat,idx) => <option key={idx}>{cat}</option>)}
            </select>
            <label>id: </label>
            <input type="number" onChange={(e) => setIdx(e.target.value)}></input>
            {/* <button>submit</button> */}
            <button>Search</button>   
            {/* <button>Search</button> */}
        </form>
    </div>
  );
}

export default SearchForm;