import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TileList from './TileList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The beginning to a beautiful relationship with REACT! 
         <TileList list = {this.props.datas} />  
        </p>
      </div>
    );
  }
}

export default App;
