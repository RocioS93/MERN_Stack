import React from 'react';

// use the isNaN method (is Not a Number). For example: isNaN(+"35") is false, isNaN(+"hello") is true


const Number = (props) => {
    console.log("this is "+ props.id);
    if (isNaN(props.id)) {
        return  <h1>The word is: {props.id}</h1>;
    }
        return <h1>The number is: {props.id}</h1>;
}

export default Number;