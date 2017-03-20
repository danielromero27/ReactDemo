import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import App from './App';
import './index.css';
import FormView from './FormView';
import TileView from './TileView';

import Tile from './Tile.js';
import TileList from './TileList.js';


const datas = [{
  bookTitle: "Oh, The Places You'll Go!",
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  bookDetails: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
},{
  bookTitle: "Oh, The Places You'll Go!",
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  bookDetails: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
}];

ReactDOM.render(
  <App datas={datas}/>,
  document.getElementById('root')
);
/*ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/search" component={FormView}/>
      <Route path="/tile" component={TileView}/>
    </Route>
  </Router>,
  document.getElementById('root')

  
);*/
