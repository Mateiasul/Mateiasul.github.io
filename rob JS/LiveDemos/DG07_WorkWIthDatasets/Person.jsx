import React from 'react';

const Person = (props) => (
    <div>
        <p>{props.name} is from {props.country}</p>
        <hr />
    </div>
);

export default Person;