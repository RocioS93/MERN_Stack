import React, { Component } from 'react';

class PersonCard extends React.Component {
        render() {
            const { lastName, firstName, age, haircolor } = this.props;
            return (
                <div>
                    <h1>{ lastName }, { firstName }</h1>
                    <h3>Age: { age }</h3>
                    <h3>Hair Color: { haircolor }</h3>
                </div>
            );
        }
    }
    
export default PersonCard;