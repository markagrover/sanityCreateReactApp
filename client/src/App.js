import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Movies from './components/Movie';
import TodoApp from './components/TodoApp';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <TodoApp/>
      </div>
    );
  }
}

export default connect(null, actions)(App);
