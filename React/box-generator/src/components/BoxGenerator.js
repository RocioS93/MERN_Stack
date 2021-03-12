import React, { useState } from  'react';
import StyledBox from "./StyledBox";

const BoxGenerator = (props) => {
const [color, setColor] = useState("");

const createBox = e => {
  e.preventDefault();
  const newBox = {color};
  console.log("bg color", newBox);
}

return(
  <div>
    <form onSubmit= { createBox }>
      <label>Color:</label>
      <input type="text" onChange={ (e) => setColor(e.target.value) }></input>
      <button type="submit" value="create Box">Add</button>
    </form>

      <p>color: {color}</p>
    <div className={ styles.box }></div>
  </div>
);
}

export default BoxGenerator;