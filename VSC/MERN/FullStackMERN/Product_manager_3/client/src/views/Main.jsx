import React from "react";
import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"
// import ProductDetails from "../components/ProductDetails"
import Details from "./Details"
import Update from "./Update"
// import ProductEdit from "../components/ProductEdit"

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
        <Route exact path="/:idx/edit">
            <Update></Update>    
        </Route>
        <Route exact path="/:idx">
            <Details></Details>
        </Route>
        </>
    )
}

