import React from 'react';
import Tile from './Tile';

const data = {
  bookTitle: "Oh, The Places You'll Go!",
  coverImage: 'https://images-na.ssl-images-amazon.com/images/I/518eq5NjZkL._SX359_BO1,204,203,200_.jpg',
  bookDetails: {
    author: 'Dr. Seuss',
    published: '22 Jan 1990',
    age: '2-8 years',
    isbn: '0679805273'
    }
};

class TileView extends React.Component{

    constructor(props){
        super(props);
      
    }

    render(){
        return(        
            <div>
                <h1>Tile Page</h1>
                
            </div>
            
        )
    }
}

export default TileView;
/*ReactDOM.render(
  <App datas={datas}/>,
  document.getElementById('root')
);*/