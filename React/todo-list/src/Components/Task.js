import React from "react";

const Task = (props) => {
    const {task, index, setList} = props;

    const onClick = () => {
        setList();
    }

    return(
        <div className="conatiner">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input type="checkbox" name=""/>
                <button onClick={onClick} className="btn btn-sm btn-danger" >Delete</button>
            </div>
        </div>
    )
}

export default Task;