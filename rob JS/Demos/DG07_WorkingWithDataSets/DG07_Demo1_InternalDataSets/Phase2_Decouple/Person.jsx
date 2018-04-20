// React needed so props are understood
import React from 'react';

// Create a functional component - it does not hold state...
const Person = (props) => (
  <div>
    <p>{props.name} is from {props.country}</p>
    <hr />
  </div>
);

export default Person;
