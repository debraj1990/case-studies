import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviePage from './components/pages/MoviePage.jsx';
import TimingPage from './components/pages/TimingPage.jsx';
import Header from './components/common/Header.jsx';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="section">
              <Route exact={true} path="/" component={MoviePage} />
              <Route path="/screen-time" component={TimingPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
