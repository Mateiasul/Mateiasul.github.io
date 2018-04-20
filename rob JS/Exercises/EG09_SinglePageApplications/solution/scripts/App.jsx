import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './main/Footer';
import { Header } from './main/Header';
import Home from './main/Home';
import Films from './films/Films';
import FilmDescription from './films/FilmDescription';
import Actors from './actors/Actors';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className="row">
            <Route exact path="/" component={Home} />
            <Route path="/films" component={Films} />
            <Route path="/actors" component={Actors} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
