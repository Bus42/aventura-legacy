import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import './gallery.css';

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

class Gallery extends Component {
    render() {

        const galleryList = [
            {
                original: img1,
                thumbnail: img1,
            },
            {
                original: img2,
                thumbnail: img2,
            },
            {
                original: img3,
                thumbnail: img3,
            },
            {
                original: img4,
                thumbnail: img4
            },
            {
                original: img5,
                thumbnail: img5
            },
            {
                original: img6,
                thumbnail: img6
            },
            {
                original: img7,
                thumbnail: img7
            },
            {
                original: img8,
                thumbnail: img8
            },
            {
                original: img9,
                thumbnail: img9
            },
            {
                original: img10,
                thumbnail: img10
            },
            {
                original: img11,
                thumbnail: img11
            },
            {
                original: img12,
                thumbnail: img12
            },
            {
                original: img13,
                thumbnail: img13
            },
            {
                original: img14,
                thumbnail: img14
            },
            {
                original: img15,
                thumbnail: img15
            },
            {
                original: img16,
                thumbnail: img16
            },
            {
                original: img17,
                thumbnail: img17
            },
            {
                original: img18,
                thumbnail: img18
            }
        ]

        return (
            <div className="flex-container">
                <div id="gallery-wrapper">
                    <ImageGallery
                        originalClass='gallery-original'
                        thumbnailClass='gallery-thumbnail'
                        lazyLoad={true}
                        items={galleryList}
                        showThumbnails={false}
                        autoPlay={true}
                    />
                </div>
            </div>
        );
    }
}

export default Gallery;