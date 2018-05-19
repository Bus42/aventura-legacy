import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Gallery from './gallery';
import Home from './home';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/gallery' component={Gallery} />
    </Switch>
  </main>
)

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
