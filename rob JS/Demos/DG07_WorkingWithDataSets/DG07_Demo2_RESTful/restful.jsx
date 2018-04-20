import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: {},
        }
    }

    componentWillMount() {
        console.log("Component will mount");
        fetch(`https://swapi.co/api/people/`)
                .then(response => response.json())
                .then(people => this.setState({
                    people
                }));
    }

    nextPage() {
        console.log("nextPage");
        fetch(this.state.people.next)
                .then(response => response.json())
                .then(people => this.setState({
                    people
                }));
    }

    prevPage() {
        console.log("Prev page");
        fetch(this.state.people.previous)
                .then(response => response.json())
                .then(people => this.setState({
                    people
                }));
    }

    render() {
        let nextButtonDisabled = false;
        let prevButtonDisabled = false;

        if(this.state.people.previous === null) {
            prevButtonDisabled = true;
        }

        if(this.state.people.next === null) {
            nextButtonDisabled = true;
        }

        return (
            <div>
                <ul>
                    {this.state.people.results !== undefined ? this.state.people.results.map(person => (
                        <li key={person.url}>{person.name}</li>
                    )) : false}
                </ul>
                <button onClick={this.prevPage.bind(this)} disabled={prevButtonDisabled}>Previous Page</button>
                <button onClick={this.nextPage.bind(this)} disabled={nextButtonDisabled}>Next Page</button>
            </div>
        );
    }
}
