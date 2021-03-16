import React from "react";

const Task = (props) => {
    const {task, index, list, setList} = props;

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete
        setList([...list]);
    };

    let conditionalClass = ""; 
    if (task.isComplete){
        conditionalClass = "strike"
    } 

    return(
        <div className="container">
            <h4 className={conditionalClass}>{task.name}</h4>
            <input onChange={onChange} type="checkbox" checked={task.isComplete} />
            <button className="btn btn-sm btn-danger" onClick={onClick} >Delete</button>
        </div>
    )
}

export default Task;