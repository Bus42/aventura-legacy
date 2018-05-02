import React, { Component } from 'react';
import logo from './resources/ship_original.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><span className="noPhones">Welcome to </span><span className="title">Aventura Legacy</span></h1>
        </header>
        <p className="App-intro">
          Not your father's RPG
        </p>
      </div>
    );
  }
}

export default App;
