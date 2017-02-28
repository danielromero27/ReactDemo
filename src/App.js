import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'
import Form from './Form';
import Tile from './Tile.js';
import TileList from './TileList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/tile">Tile</Link></li>
        </div>
        <p className="App-intro">
          {this.props.children} 
        </p>
        
      </div>
    );
  }
}


export default App;


