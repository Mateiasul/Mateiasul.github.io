import React from 'react';
import Chance from 'chance';

// 1.3 - Import the AddToList component
import AddToList from './AddToList';
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
        {/*
          1.1 Create a component called add to list so we can add our own people to the list - remember to import it
          1.3 Add the component below and run - submit just refreshes the page...
          <AddToList />
        */}
        {/* 1.8 Modify <AddToList component to have onSubmit event handling */}
        <AddToList onSubmit={this.addToList.bind(this)} />
      </div>
    );
  }

  // 1.9 - Create addToList function to add the person submitted on form to
  // people array and display them in the list as a result...
  addToList(personToAdd) {
    // Create a local variable set to the current state of people
    let people = this.state.people;
    // Add the personToAdd to the local people array
    people.push( {
      id: people.length,
      name: personToAdd.name,
      country: personToAdd.country
    });
    // Set state to local people
    this.setState(
      {
        people
      }
    );
    // Just for kicks - store people in localStorage
    localStorage.people = JSON.stringify(this.state.people);
    console.log(localStorage.people);
  }
}
