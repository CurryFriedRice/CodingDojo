import React, {useState, useEffect} from 'react'
import {
    useParams
}from 'react-router-dom'

import axios from 'axios'

export default props => {
    const [product,setProduct] = useState({})
    const {idx} = useParams();
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${idx}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log("error",err));
    },[])

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description{product.description}</p>
        </div>
    )
}