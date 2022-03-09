import React, { useState } from  'react';
import Style from "./UserForm.module.css"
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <div className={Style.container}>
            <form onSubmit={ createUser }>
                <div className={Style.flex}>
                    <label className={Style.center}>First Name: </label> 
                    <input type="text" onChange={ (e) => setfirstName(e.target.value) } />
                </div>
                <div className={Style.flex}>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setlastName(e.target.value) } />
                </div>
                <div className={Style.flex}>
                    <label>Email: </label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className={Style.flex}>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className={Style.flex}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setconfirmPassword(e.target.value) } />
                </div>
            </form>
            <div className="output">
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};
    
export default UserForm;