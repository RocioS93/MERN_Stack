import React, { useState } from  'react';
import styles from './UserForm.module.css';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");   
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div className={ styles.formbg }>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <br></br>
            <div className={ styles.formbg }>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className={ styles.formbg }>
                <label>Email: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className={ styles.formbg }>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <br></br>
            <div className={ styles.formbg }>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
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
};
export default UserForm;