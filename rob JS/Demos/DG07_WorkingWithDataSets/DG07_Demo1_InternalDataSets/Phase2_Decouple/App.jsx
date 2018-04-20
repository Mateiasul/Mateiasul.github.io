import React from 'react';
import Chance from 'chance';

// Import the Person component
import Person from './Person';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const people = [];

    for (let i = 0; i < 10; i++) {
      people.push({
        id: i,
        name: chance.first(),
        country: chance.country({full: true})
      });
    }

    this.state = {
      people
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.people.map((person, index) => (<Person key={person.id.toString()} name={person.name} country={person.country}/>))}
      </div>
    );
  }
}
