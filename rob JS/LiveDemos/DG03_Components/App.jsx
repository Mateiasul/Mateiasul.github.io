/* Import React so that the React.Component class can be used */
import React from 'react';

import FirstChildComponent from './FirstChildComponent';
import SecondChildComponent from './SecondChildComponent';

/* Create a class to represent the component */
/* It must extend the React.Component class, be exported and have a render method */

export default class App extends React.Component {

    render() {
        /* The render function must exist for every class component? */
        /* It must have only 1 outer HTML element */
        return (
            <div>
                {/* Comments inside the return must be surrounded with curly braces 
                <h1>Hello World from a JSX React Component</h1>
                <p>Other elements can be added inside as normal HTML code</p> */}
                <FirstChildComponent />
                <SecondChildComponent />
            </div>
        );
    }
}