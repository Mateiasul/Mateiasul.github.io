// A child as a class
import React from 'react';

export default class FirstChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi from the First Child</h1>
                <p>I'm an annoying first child!</p>
            </div>
        );
    }
}