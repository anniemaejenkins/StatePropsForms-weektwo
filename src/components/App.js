import React, { Component } from 'react';
import logo from './../logo.svg';
import './../styles/App.css';

import BaseLayout from './BaseLayout.js';

class App extends Component {
constructor(props){
  super(props);
}

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="fetchdata">
        <BaseLayout/>
        </div>

      </div>
    );
  }
}

export default App;
