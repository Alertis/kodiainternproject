import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Students from './pages/Student';
import University from './pages/University';
import UniversityDetail from './pages/UniversityDetail';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main} ></Route>
        <Route exact path="/App" component={Main} ></Route>
        <Route exact path="/Students" component={Students}></Route>
        <Route exact path="/University" component={University}></Route>
        <Route exact path="/UniversityDetail" component={UniversityDetail}></Route>



      </div>
    );
  }
}

export default App;
