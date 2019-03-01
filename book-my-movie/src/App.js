import React, { Component } from 'react';
import TimeSelector from './components/TimeSelector';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Movie App</h1>
        <div className="section">
          <TimeSelector />
        </div>
      </div>
    );
  }
}

export default App;
