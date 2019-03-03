import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/HomePage.jsx';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
