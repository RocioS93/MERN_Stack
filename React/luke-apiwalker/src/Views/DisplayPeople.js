import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import {Link} from '@reach/router';

const DisplayPeople = (props) => {
    const [person, setPerson] = useState({});
    const [homeworldData, setHomeworldData] = useState({});
    const [homeworldPath, setHomeworldPath] = useState("");

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + props.id + "/")
            .then(response => {
                setPerson(response.data);
                setHomeworldPath("/" + response.data.homeworld.slice(21))
            });
        }, 
        [props.id]
    );

    useEffect(() => {
        axios.get(person.homeworld)
            .then(response => setHomeworldData(response.data))
        },
    [person.homeworld]
    )

    return(
        <div className="container">
            <Home />
            {person.name?
                <div className="col">
                    <h2>{person.name}</h2>
                    <h4>Height: {person.height}</h4>
                    <h4>Mass: {person.mass}</h4>
                    <h4>Hair Color: {person.hair_color}</h4>
                    <h4>Skin Color: {person.skin_color}</h4>
                    <p>homeworld: {homeworldData.name}</p>
                    <Link to={homeworldPath}>View {homeworldData.name}</Link>
                </div> :
                <div className="col">
                    <p>These aren't the droids you're looking for.</p>
                    <img src="https://www.feistees.com/images/uploads/2016/04/are-these-the-droids-youre-looking-for-t-shirt.jpg" alt="Not found"/>
                </div>
            }
        </div>
    );
}

export default DisplayPeople;