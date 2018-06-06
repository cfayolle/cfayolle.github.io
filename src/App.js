import React, { Component } from 'react';
import './App.css';
import { Nav, Home, About, Projects, Contact } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
