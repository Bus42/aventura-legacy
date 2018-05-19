import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Gallery from './gallery';
import Home from './home';
import { Route, Switch } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/gallery' component={Gallery} />
    </Switch>
  </main>
)

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Main />
        <footer><small>Design and code by Studio42Dev</small></footer>
      </div>
    );
  }
}

export default App;
