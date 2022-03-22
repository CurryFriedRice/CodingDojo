import React, { useEffect, useState, } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import 
{
    useHistory
}from 'react-router-dom'

import ProductForm from "../components/ProductForm" 

export default () => 
{
    const {idx} = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const history = useHistory();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${idx}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    },[])

    const updateProduct = (e, product)=> 
    {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${idx}`,  {title: product.title, price: product.price, description: product.description})
            .then(res => {
            console.log(res)
            history.push(`/${idx}`)
            })
        .catch(err => console.log(err))
    }


    return (
        <>
        <ProductForm onSubmitHandler={updateProduct}></ProductForm>
        {/* <form onSubmit={(e) => updateProduct(e)}>
            <p> 
                <label>Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} ></input>
            </p>
            <p> 
                <label>Price:</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} ></input>
            </p>
            <p> 
                <label>Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} ></input>
            </p>
            <button type="submit">Submit</button>
        </form> */}
        </>
    )
}

