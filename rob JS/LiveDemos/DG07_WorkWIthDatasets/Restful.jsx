import React from 'react';

export default class Restful extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: {}
        }

        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
    }

    componentWillMount() {
        console.log("Component will mount");
        fetch(`https://swapi.co/api/people/`)
            .then(response => response.json())
            .then(people => this.setState({ people }));
    }

    nextPage() {
        console.log("Next page called");
        fetch(`${this.state.people.next}`)
            .then(response => response.json())
            .then(people => this.setState({ people }));
    }

    prevPage() {
        console.log("Previous page called");
        fetch(`${this.state.people.previous}`)
            .then(response => response.json())
            .then(people => this.setState({ people }));
    }

    render() {
        let nextBtnDisabled = false;
        let prevBtnDisabled = false;

        if(this.state.people.previous === null) {
            prevBtnDisabled = true;
        }

        if(this.state.people.next === null) {
            nextBtnDisabled = true;
        }
        return (
            <div>
                <ul>
                    {this.state.people.results !== undefined ? this.state.people.results.map(person => (
                        <li key={person.url}>{person.name}</li>
                    )) : false}
                </ul>
                <button onClick={this.prevPage} disabled={prevBtnDisabled}>Prev Page</button>
                <button onClick={this.nextPage} disabled={nextBtnDisabled}>Next Page</button>
            </div>
        )
    }
}