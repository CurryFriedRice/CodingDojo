import React from "react";
import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"
// import ProductDetails from "../components/ProductDetails"
import Details from "./Details"
import Update from "./Update"
// import ProductEdit from "../components/ProductEdit"
import axios from 'axios'

import 
{
    Route
}from 'react-router-dom'


export default () => 
{
    const createNewProduct = (e, product) =>{
        // e.preventDefault();
        axios.post("http://localhost:8000/api/products", {title: product.title, price: product.price, description: product.description})
            .then(res => {
                console.log("response", res)
            })  
            .catch(err => console.log("error", "FAILED TO MAKE NEW ITEM| " +err));
    }

    return (
        <>
        {/* <p>Message from the backend: {message}</p>
        <div>{JSON.stringify(message)}</div> */}
        {/* <PersonForm/> */}
        <Route exact path="/">
            <ProductForm onSubmitHandler={createNewProduct}></ProductForm>
            <ProductList></ProductList>
        </Route>
        <Route exact path="/:idx/edit">
            <Update></Update>    
        </Route>
        <Route exact path="/:idx">
            <Details></Details>
        </Route>
        </>
    )
}

