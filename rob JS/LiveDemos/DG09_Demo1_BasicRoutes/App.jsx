import React from 'react';

// Import the routing classes
// Need to install and import the react-router-dom module
import {
    BrowserRouter as Router,    // Uses HTML5 history API to keep UI in sync with URL
    Route,                      // Render some UI whe location matches route's path
    Link                        // Provides declarative, accesible navigation around the app
} from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/content1">Content 1</Link></li>
                <li><Link to="/content2">Content 2</Link></li>
            </ul>

            {/*  Define the routes for the paths specified in the Links */}
            <Route exact path="/" component={Home} />
            {/* If you only want to match '/' then 'exact' is needed otherwise all urls */}
            {/* that start with '/' will be matched...*/}
            <Route path="/content1" component={Content1} />
            <Route path="/content2" component={Content2} />            
        </div>
    </Router>
);

const Content1 = () => (
    <div>
        <h2>Content 1 placeholder</h2>
    </div>
);

const Content2 = ({match}) => (
    <div>
        <h2>Content 2 placeholder</h2>
        {/* Define some sub-navigation for this component */}
        <ul>
            <li>
                <Link to={`${match.url}/subcontent1`}>Subcontent 1</Link>           
            </li>
            <li>
                <Link to={`${match.url}/subcontent2`}>Subcontent 2</Link>
            </li>
            <li>
                <Link to={`${match.url}/subcontent3`}>Subcontent 3</Link>
            </li>
        </ul>
        {/* Define the Route for each link using parameter matching */}
        <Route path={`${match.url}/:subcontentId`} component={SubComponent} />
        <Route exact path={match.url} render = {() => ( <h3>Please select the subcontent</h3>)} />
    </div>
);

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const SubComponent = ({match}) => (
    <div>
        {/* Output the sub-url here */}
        <h3>{match.params.subcontentId}</h3>
    </div>
);

export default App;