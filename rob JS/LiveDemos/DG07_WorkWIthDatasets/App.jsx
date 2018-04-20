import React from 'react';
{/*
  Chance is a minimalist generator of random strings, numbers, etc. to
  help reduce some monotony particularly while writing automated tests or
  anywhere else you need anything random. (http://chancejs.com)
  Before continuing run npm install chance --save
*/}
import Chance from 'chance';

import Person from './Person';
import AddToList from './AddToList';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        /* Define a constant of an array that will be populated by chance */
        const people = [];

        /* Populate the array (could have been done with an HTTP request) */
        for(let i = 0; i < 10; i++) {
            people.push({
                id: i,
                name: chance.first(),
                country: chance.country({full:true})
            });
        }

        this.state = { people };
        /* If key and value have same name then ES2015+ only needs name once 
            Essentially this.state = { people: people };
        */

        this.addPersonToArray = this.addPersonToArray.bind(this);
    }

    addPersonToArray(personToAdd) {
        // Create a local copy of the people state array
        let people = this.state.people;

        // Add the person to add to the local array
        people.push({
            id: people.length,
            name: personToAdd.name,
            country: personToAdd.country
        });

        // Set the people state array to equal the local people array
        this.setState(
            {
                people
            }
        );
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>

                {/* Output each of the people in the array using the map function 
                {this.state.people.map((person, index) => (
                    <div key={person.id.toString()}>
                        <p>{person.name} is from {person.country}</p>
                        <hr />
                    </div>
                ))}*/}

                {this.state.people.map((person, index) => (
                    <Person key={person.id.toString()} name={person.name} country={person.country} />
                ))}
                <AddToList onSubmit={this.addPersonToArray} />
            </div>
        );
    }
}