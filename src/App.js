import React, { Component } from 'react';
import './App.css';
import { Nav, Home, About, Projects } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
