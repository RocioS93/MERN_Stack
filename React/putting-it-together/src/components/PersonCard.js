import React, { Component } from 'react';

class PersonCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickAge: props.age
        }
    }
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }

        render() {
            const { lastName, firstName, age, hairColor } = this.props;
            return (
                <div>
                    <h1>{ lastName }, { firstName }</h1>
                    <h3>Age: { age }</h3>
                    <h3>Current Age: { this.state.clickAge }</h3>
                    <h3>Hair Color: { hairColor }</h3>
                    <button onClick={this.clickHandler}>
                        Birthday Button for {firstName} {lastName}      
                    </button>
                </div>
            );
        }
    }
    
export default PersonCard;