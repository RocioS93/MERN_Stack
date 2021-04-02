import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const Home = (props) =>{
    const [search, setSearch] = useState("people");
    const [num, setNum] = useState("");
    const [maxInput, setMaxInput] = useState("80");

    const handleForm = e => {
        e.preventDefault();
        navigate("/" + search + "/" + num + "/");
    }

    const searchSubmit = e => {
        setSearch(e.target.value);
        if(e.target.value == "people"){
            setMaxInput("80");
        } else if(e.target.value== "planets"){
            setMaxInput("60");
        }
        if(parseInt(num) > 60 && e.target.value == "planets") {
            e.target.nextElementSibling.value = 60;
        }
    }
        return (
            <div className="container">
                <div className="d-flex w-50 justify-content-between">
                    <form onSubmit={handleForm}>
                        <div className="d-flex justify-content-between">
                            <label className="mx-3 w-50">Search for:</label>
                            <select className="form-control m-3" onChange={searchSubmit}>
                                <option value="people">People</option>
                                <option value="planets">Planets</option>
                            </select>
                            <label className="mx-5">ID:</label>
                            <input className="form-control m-3  w-50 " type="number" min="1" max={maxInput} onChange={(e) => setNum(e.target.value)}/>
                            <button className="btn btn-sm btn-primary h-50 align-self-center" onSubmit={handleForm}>Fetch</button>
                        </div>
                    </form>
                </div>
            </div>
        )
}


export default Home;