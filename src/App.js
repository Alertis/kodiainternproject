import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Students from './pages/Students';
import HeaderComp from './component/Header'


class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderComp />
        <Route exact path="/App" component={Main} ></Route>
        <Route exact path="/Students" component={Students}></Route>

      </div>
    );
  }
}

export default App;
