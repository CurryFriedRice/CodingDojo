import React from "react";
import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"
import ProductDetails from "../components/ProductDetails.jsx"
import 
{
    Route
}from 'react-router-dom'


export default () => 
{

    return (
        <>
        {/* <p>Message from the backend: {message}</p>
        <div>{JSON.stringify(message)}</div> */}
        {/* <PersonForm/> */}
        <Route exact path="/">
            <ProductForm></ProductForm>
            <ProductList></ProductList>
        </Route>
        <Route exact path="/:idx">
            <ProductDetails></ProductDetails>
        </Route>
        </>
    )
}

