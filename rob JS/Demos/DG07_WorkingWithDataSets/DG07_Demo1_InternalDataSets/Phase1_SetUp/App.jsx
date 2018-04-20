import React from 'react';
{/*
  Chance is a minimalist generator of random strings, numbers, etc. to
  help reduce some monotony particularly while writing automated tests or
  anywhere else you need anything random. (http://chancejs.com)
  Before continuing run npm install chance --save
*/}
import Chance from 'chance';


export default class App extends React.Component {

  constructor(props) {
   super(props);

   /* Define a constant of people that will be an array - could as well be the
      return of an AJAX request for some JSON data
   */
   const people = [];

   /* Populate the array by looping and using chance to generate random data */
   for(let i = 0; i < 10; i++) {
     people.push({
       id: i,
       name: chance.first(),
       country: chance.country({full:true})
     });
   }

   /* Set the initial state to be the people array */
   this.state = { people };
   /* If the key is the same as the value, then ES2015+ only needs it once
      Essentiallly this.state = { people: people };
   */

 }


 // render() {
 //   return (
 //     <div>
 //       {/* Use the title from the attribute of App (in main.js) */}
 //       <h1>{this.props.title}</h1>
 //       {/* Output each of the people in the array using the map function */}
 //       {this.state.people.map((person, index) => (
 //         <div>
 //           <p>{person.name} is from {person.country}</p>
 //           <hr />
 //         </div>
 //       ))}
 //     </div>
 //   );
 // }

 // map function does following:
 //    1) For every item in the array, it gives us the item itself in person
 //       and the position of the item in index
 //    2) It creates a new anonmymous function (=> part) that receives those
 //       two things as parameters and returns a value of the modified data
 //    3) Uses the input element to create some JSX based on the person
 // Save and run app, observing console...
 // CONSOLE ERROR IS GIVEN!!!!
 // 'Each child in an array or iterator should have a unique "key" prop'
 // Because need to give every top-level item printed by that loop a KEY attr
 // that identifies it uniquely.  Reason for this is called RECONCILIATION.
 // Becomes very important when making more advanced apps and so needs to be dealt with


 // Solution is to modify render as below:
 render() {
   return (
     <div>
       <h1>{this.props.title}</h1>
       {this.state.people.map((person, index) => (
         <div key={person.id.toString()}>
           <p>{person.name} is from {person.country}</p>
           <hr />
         </div>
       ))}
     </div>
   );
 }
}
