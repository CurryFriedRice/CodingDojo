import React, {useState,useEffect} from 'react'
import axios from 'axios'
import 
{
    useHistory
} from 'react-router-dom'


export default props => {
    const [products, setProducts] = useState([{}])
    const history = useHistory();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {setProducts(res.data)
                        console.log(res.data)
            })
            .catch(err => console.log("error",err));
    },[])

    const onClickHandler =(e, _id) =>{
        e.preventDefault()
        console.log(_id)
        history.push(_id);
    }

    return (
        <>
        <h2>List of Products</h2>
        <ul>
            {products === undefined ?'Loading': 
                products.map((item, idx) => 
                <li key={idx}><a href="" onClick={(e) => onClickHandler(e, item._id)}>{item.title}</a>
                {/* | {item.price} | {item.description} */}
                </li>
            )
            }
            {/* {JSON.stringify(products)} */}
       </ul>
            </>
    )
}