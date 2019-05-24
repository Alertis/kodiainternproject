import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/App" component={Main}></Route>

      </div>
    );
  }
}

export default App;
