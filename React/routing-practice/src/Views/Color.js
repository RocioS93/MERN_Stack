import React from 'react';

const Color = (props) => {
    const word = props.word;
    const color = props.color;
    const bg = props.bg;

    const StyleTxt = {
        color: color,
        backgroundColor: bg,
        border: "2px solid black",
    }

    return (
        <div style={StyleTxt}>
            <h1>The word is: {props.word}</h1>
        </div>
        
    )
}

export default Color;