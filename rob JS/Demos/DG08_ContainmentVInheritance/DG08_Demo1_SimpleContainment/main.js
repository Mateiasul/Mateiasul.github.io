import React from 'react';
import ReactDOM from 'react-dom';

const ContainmentComponent = (props) => (
    <div className={'conStyle conStyle-' + props.color}>
      {/* Value is determined from what is defined between ContainmentComponent
       from any component that uses it */}
      {props.children}
    </div>
);


const ParentComponent = () => (
    <ContainmentComponent color="red">
      {/* These are passed to ContainmentComponent as children */}
      <h1 className="title">Welcome</h1>
      <p className="message">Thank you for coming!</p>
    </ContainmentComponent>
);



ReactDOM.render(
  <ParentComponent />,
  document.querySelector('#app')
);

// Remember to add stylesheet to index...!!!
