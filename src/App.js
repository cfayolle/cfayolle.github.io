import React, { Component } from 'react';
import './App.css';
import { Nav, Home } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
