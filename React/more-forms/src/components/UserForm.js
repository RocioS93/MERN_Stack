import React, { useState } from  'react';
import styles from './UserForm.module.css';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("Cannot be empty!");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");   

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Thank you for submitting the form!";
    } else {
        return "Welcome, please submit the form";
    }
    };

    const validateText = (e, valText) => {
        let message = ""
        if(e.target.value.length < 1) {
            message = `${valText} is required!`;
        } else if(e.target.value.length < 2) {
            message = `${valText} must be at least 2 characters!`;
        } else{
            message = ""
        }

        if(valText == "First Name"){
            setFirstName(e.target.value);
            setFirstNameError(message);
        } else if(valText == "Last Name"){
            setLastName(e.target.value);
            setLastNameError(message);
        } else if(valText == "email"){
            setEmail(e.target.value);
            setEmailError(message);
        }
    }; 

    const valPassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else{
            setPasswordError("");
        }
    };

    const valConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
        setConfirmPasswordError("Password does not match!");
        }else{
            setConfirmPasswordError("");
        }
    };
    
    return(
    <div>
        <form onSubmit={ (e) => e.preventDefault() }>
            <h3>{ formMessage() }</h3>
            <div className={ styles.frm }>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => {validateText(e, "First Name")} } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <br/>
            <div className={ styles.frm }>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => {validateText(e, "Last Name")} }  />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>

            <div className={ styles.frm }>
                <label>Email: </label> 
                <input type="email" onChange={ (e) => {validateText(e, "email")} }  />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>

            <div className={ styles.frm }>
                <label>Password: </label>
                <input type="password" onChange={ valPassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <br/>
            <div className={ styles.frm }>
                <label>Confirm Password: </label>
                <input type="password" onChange={ valConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>

        <div>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    </div>
    );
}
export default UserForm;