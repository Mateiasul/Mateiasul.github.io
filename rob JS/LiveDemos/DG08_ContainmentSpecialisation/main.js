
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

const ContainmentComponent = (props) => (
    <div className={'conStyle conStyle-' + props.color}>
        {props.children}
    </div>
);

const ParentComponent = () => (
    <div>
        <ContainmentComponent color="blue">
            {/* The following are passed to Containment component as children */}
            <h1 className="title">Welcome</h1>
            <p className="message">Thank you for coming!</p>
        </ContainmentComponent>
        <SplitterComponent
            left={<LeftSplit />}
            right={<RightSplit />}
        />
    </div>
);


ReactDOM.render(
    <ParentComponent />,
    document.querySelector('#app')
);