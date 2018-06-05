import React, { Component } from 'react';
import './App.css';
import { Nav, Home, About } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
