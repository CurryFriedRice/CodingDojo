import React, {useState, useEffect} from "react";
import axios from "axios"

import 
{
    useParams
} from "react-router-dom"
import { json } from "express/lib/response";

export default () => 
{
    const {idx} = useParams();
    const [product, setProduct] = useState;
    useEffect(() => {
        axios.get(`https://localhost:8000/api/product/${idx}`)
        .then (res => setProduct(res.data))
        .catch(err=> console.log(err))
    },[])

    return (
        <>
            <p>{JSON.stringify(product)}</p>
        </>
    )
}

