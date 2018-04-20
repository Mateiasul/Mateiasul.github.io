import React from 'react';
import ReactDOM from 'react-dom';

const LeftSplit = () => (
  <div className="LeftSplit">I am the left pane</div>
);

const RightSplit = () => (
  <div className="RightSplit">I am the right pane</div>
);

const SplitterComponent = (props) => (
  <div className="SplitterComponent">
    <div className="SplitterComponent-left">
      {props.left}
    </div>
    <div className="SplitterComponent-right">
      {props.right}
    </div>
  </div>
);

const ParentComponent = () => (
  <SplitterComponent left={< LeftSplit />} right={< RightSplit />} />
);

ReactDOM.render(
  <ParentComponent/>, document.querySelector('#app')
);

// Remember to change stylesheet!!!
