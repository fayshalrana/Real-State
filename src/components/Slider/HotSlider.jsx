import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotSaleCard from '../HotSaleCard/HotSaleCard';
import Slider from 'react-slick';
import './HotSlider.css';
import { NextArrow, PrevArrow } from './Arrows';
import sliderImg1 from '../../assets/images/sliderImg1.jpeg';
import sliderImg2 from '../../assets/images/sliderImg2.jpeg';
import sliderImg3 from '../../assets/images/sliderImg3.jpeg';
import sliderImg4 from '../../assets/images/sliderImg4.jpeg';
import sliderImg5 from '../../assets/images/sliderImg5.jpeg';


const HotSlider = () => {
    const SliderImg = [
        { img: sliderImg1 },
        { img: sliderImg2 },
        { img: sliderImg3 },
        { img: sliderImg4 },
        { img: sliderImg5 },
        { img: sliderImg3 },
        { img: sliderImg5 },
        { img: sliderImg1 },
        { img: sliderImg4 },
        { img: sliderImg2 }
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />, // Custom previous arrow
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    SliderImg.map((card, index) => (
                        <HotSaleCard card={card} key={index} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default HotSlider
