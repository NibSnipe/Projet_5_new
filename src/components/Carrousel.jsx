import { useState } from 'react';
import right from "../assets/images/right_arrow.svg";
import left from "../assets/images/left_arrow.svg";
import "../sass/carrousel.scss";


const Carrousel = ({ images }) => {

    //Fonction pour appliquer les chevrons si plusieurs images
    const singleImage = images.length === 1;


    // Fonction pour défiler les images
    const [ currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    }


    return (
        <div>
            <div className='carrousel'>
            {!singleImage && ( // Affichage des chevrons si plusieurs images
                <div className='btn-slide'>
                    <img src={left} className='left' alt='left arrow' onClick={prevSlide}/>
                    <img src={right} className='right' alt='right arrow' onClick={nextSlide}/>
                </div>
             )}
             <div className='slides-container' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                <img 
                key={index}
                src={image} 
                alt={`Slide ${index}`}
                className='slides'
                />
                ))}
             </div>
             {!singleImage && (
                <div className='imageNumber'>
                    {currentSlide + 1} / {images.length}
                </div>
             )}
        </div>
        </div>
    );
};

export default Carrousel;