import React, { useState } from  'react';
import Style from "./UserForm.module.css"
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameErr, setfirstNameErr] = useState("")
    const [lastName, setlastName] = useState("");
    const [lastNameErr, setlastNameErr] = useState("")
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("")
    const [password, setPassword] = useState("");  
    const [passwordErr,setpasswordErr] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");  
    const [confirmpasswordErr,setconfirmpasswordErr] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    const HandleFirstName = (e) => 
    {
        setfirstName(e.target.value)
        if(e.target.value == 0 || e.target.value.length >= 2) {setfirstNameErr("")}
        else setfirstNameErr("Error: First Name must be at least 2 characters Long");

    }

    const HandleLastName = (e) => 
    {
        setlastName(e.target.value)
        if(e.target.value == 0 || e.target.value.length >= 2) {setlastNameErr("")}
        else setlastNameErr("Error: Last Name must be at least 2 characters Long");
    }

    const HandleEmail = (e) =>
    {
        setEmail(e.target.value)
        if(e.target.value.length >= 5 || e.target.value.length==0) setEmailErr("");
        else if(!e.target.value.includes("@")) setEmailErr("Email must contain an @ symbol");
        else setEmailErr("Email must be at least 5 characters long");
    }

    
    const HandlePassword = (e) =>
    {
        setPassword(e.target.value)
        if(e.target.value.length == 0 || e.target.value.length >= 8) setpasswordErr("");
        else setpasswordErr("Password must be at least 8 characters Long")
    }

    
    const HandlePasswordConfirm = (e) =>
    {
        setconfirmPassword(e.target.value)
        if(e.target.value.length == 0 || e.target.value.length >= 8) setconfirmpasswordErr("");
        else if(password != setconfirmPassword)  setconfirmpasswordErr("Passwords must match")
        else setconfirmpasswordErr("Password must be at least 8 characters Long")
    }

    return(
        <div className={Style.container}>
            <form onSubmit={ createUser }>
                <div className={Style.flex}>
                    <label className={Style.center}>First Name: </label> 
                    <input type="text" onChange={ HandleFirstName } />
                    
                </div>
                    {
                        firstNameErr ?
                        <p style={{color:'red'}}>{ firstNameErr }</p> :
                        ''
                    }
                <div className={Style.flex}>
                    <label>Last Name: </label> 
                    <input type="text" onChange={HandleLastName } />
                </div>
                    {
                        lastNameErr ?
                        <p style={{color:'red'}}>{ lastNameErr }</p> :
                        ''
                    }
                <div className={Style.flex}>
                    <label>Email: </label>
                    <input type="email" onChange={ HandleEmail } />
                </div>
                    {
                        emailErr ?
                        <p style={{color:'red'}}>{ emailErr }</p> :
                        ''
                    }
                <div className={Style.flex}>
                    <label>Password: </label>
                    <input type="password" onChange={ HandlePassword } />
                </div>
                {
                        passwordErr ?
                        <p style={{color:'red'}}>{ passwordErr }</p> :
                        ''
                    }
                <div className={Style.flex}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ HandlePasswordConfirm } />
                </div>
                    {
                        confirmpasswordErr ?
                        <p style={{color:'red'}}>{ confirmpasswordErr }</p> :
                        ''
                    }
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