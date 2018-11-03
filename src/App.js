import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Clients from './components/clients/Clients';
import Actions from './components/actions/Actions'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/actions">Actions</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
          </ul>
          <Route exact path="/clients" render={() => <Clients />} />
          <Route exact path="/actions" render={()=> <Actions />} />
          <Route exact path="/analytics" />
        </div>
      </Router>
    );
  }
}

export default App;
