import React from 'react';
import './styles.css';
import ImageGallery from 'react-image-gallery';
import Logo from '../../assets/Logo.png';
import Logo2 from '../../assets/Logo_300dpi.jpg';
import Logo3 from '../../assets/CapaFacebook1.png';


export default function Carousel () {
    
    const images = [
        {
            original: Logo,
            thumbnail: Logo,
        },

        {
            original: Logo2,
            thumbnail: Logo2,
        },

        {
            original: Logo3,
            thumbnail: Logo3,
        },
    ];
    
    return(
        <ImageGallery 
            items={ images } 
            showThumbnails={false} 
            autoPlay={true} 
            showPlayButton={false}
            showFullscreenButton={false}
        />
    );
}