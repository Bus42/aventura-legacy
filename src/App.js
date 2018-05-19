import React, { Component } from 'react';
import logo from './resources/ship_original.jpeg';
import './App.css';

//Image imports
import img1 from './resources/1-min.jpeg';
import img2 from './resources/2-min.jpeg';
import img3 from './resources/3-min.jpeg';
import img4 from './resources/4-min.jpeg';
import img5 from './resources/5-min.jpeg';
import img6 from './resources/6-min.jpeg';
import img7 from './resources/7-min.jpeg';
import img8 from './resources/8-min.jpeg';
import img9 from './resources/9-min.jpeg';
import img10 from './resources/10-min.jpeg';
import img11 from './resources/11-min.jpeg';
import img12 from './resources/12-min.jpeg';
import img13 from './resources/13-min.jpeg';
import img14 from './resources/14-min.jpeg';
import battleaxe from './resources/battleaxe_original-min.jpeg';
import solarsail from './resources/solar_sail-min.jpeg';
import ship from './resources/ship_original-min.jpeg';
import starships from './resources/starships-min.jpeg';
import title from './resources/title_original-min.jpeg';

//

let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, battleaxe, solarsail, ship, starships, title];

const imageList = images.map((image)=>
<img className="galleryImg" src={image} alt="#" key={images.indexOf(image)}/>
);



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><span className="noPhones">Welcome to </span><span className="title">Aventura Legacy</span></h1>
        </header>
        <p className="App-intro">
          Not your father's RPG
        </p>
        <div id="gallery">
        {imageList}
        </div>
      </div>
    );
  }
}

export default App;
