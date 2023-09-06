import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay } from 'swiper'
import './Hero.css'
import Search from '../component/Search';
import image2 from '../asserts/images/backIcons/bg2.jpg';
import image3 from '../asserts/images/backIcons/bg5.jpg';
import image4 from '../asserts/images/backIcons/bg3.webp';

SwiperCore.use([Autoplay]);

const Hero = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 20000,
                breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            },
        });
    }, []);
    
    return (
        <div className="swiper-container" id="Home" >
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: `url(${image3})`}}>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: `url(${image4})`}}>
                </div>
                <div className="swiper-slide" style={{ backgroundImage: `url(${image2})`}}>
                </div>
            </div>
            <div className='recipe-headline'>
                <h2>Find a Recipe</h2>
            </div>
            <Search />
        </div>
    )
}

export default Hero;
