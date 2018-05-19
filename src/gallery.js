import React, { Component } from 'react'

//Image imports
import img1 from './resources/1_small-min.jpeg';
import img2 from './resources/2_small-min.jpeg';
import img3 from './resources/3_small-min.jpeg';
import img4 from './resources/4_small-min.jpeg';
import img5 from './resources/5_small-min.jpeg';
import img6 from './resources/6_small-min.jpeg';
import img7 from './resources/7_small-min.jpeg';
import img8 from './resources/8_small-min.jpeg';
import img9 from './resources/9_small-min.jpeg';
import img10 from './resources/10_small-min.jpeg';
import img11 from './resources/11_small-min.jpeg';
import img12 from './resources/12_small-min.jpeg';
import img13 from './resources/13_small-min.jpeg';
import img14 from './resources/14_small-min.jpeg';
import img15 from './resources/15_small-min.jpeg';
import img16 from './resources/16_small-min.jpeg';
import img17 from './resources/17_small-min.jpeg';
import img18 from './resources/18_small-min.jpeg';
//

let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

const imageList = images.map((image) =>
  <img className="galleryImg" src={image} alt="#" key={images.indexOf(image)} />
);

class Gallery extends Component {
    render() {
        return (
            <div id="gallery">
                {imageList}
            </div>
        );
    }
}

export default Gallery;