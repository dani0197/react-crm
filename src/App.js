import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="navBar">
          <Link className="Link" to="/clients">Clients</Link>
          <Link className="Link" to="/actions">Actions</Link>
          <Link className="Link" to="/analytics">Analytics</Link>
        </div>
        <Route exact path="/clients" />
        <Route exact path="/actions" />
        <Route exact path="/analytics" />
        </div>
      </Router>
    );
  }
}

export default App;
