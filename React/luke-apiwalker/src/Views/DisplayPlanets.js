import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import {Link} from '@reach/router';

const DisplayPlanets = (props) => {
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + props.id + "/")
            .then(response => setPlanet(response.data))
        }, 
        [props.id]
    );

    return(
        <div className="container">
            <Home/>
            { planet.name?
                <div className="col">
                    <h3>{planet.name}</h3>
                    <p>climate: {planet.climate}</p>
                    <p>terrain: {planet.terrain}</p>
                    <p>surface water: {planet.surface_water}</p>
                    <p>population: {planet.population}</p>    
                </div> :
                <div className="col">
                    <p>These aren't the droids you're looking for.</p>
                    <img src="https://www.feistees.com/images/uploads/2016/04/are-these-the-droids-youre-looking-for-t-shirt.jpg" alt="Not found"/>
                </div>
            }
        </div>
    )
}

export default DisplayPlanets;