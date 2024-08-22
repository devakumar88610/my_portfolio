import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// Graphic Skills Import
import Photoshop from "../assets/Icons/Photoshop.svg"
import Illustrator from "../assets/Icons/Illustrator.svg"
import InDesign from "../assets/Icons/InDesign.svg"
import AfterEffects from "../assets/Icons/AfterEffects.svg"
import Xd from "../assets/Icons/Xd.svg"
import Figma from "../assets/Icons/Figma.svg"

// Developer Skills import
import Html from '../assets/Icons/Html.svg'
import Css from '../assets/Icons/Css.svg'
import Javascript from '../assets/Icons/Javascript.svg'
import Bootstrap from '../assets/Icons/Bootstrap.svg'
import Tailwind from '../assets/Icons/Tailwind.svg'
import Python from '../assets/Icons/Python.svg'
import Node from '../assets/Icons/Node.svg'

const skillsIcons = [Photoshop, Illustrator, InDesign, AfterEffects, Xd, Figma, Html, Css, Javascript, Bootstrap, Tailwind, Python, Node]

const ImageSlick = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    skillsIcons.map((Icons, index) => (
                        <div key={index} className='flex items-center'>
                            <img src={Icons} alt="Hello" className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] mx-auto 
                                        hover:opacity-50 transition-all duration-500 cursor-pointer' />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default ImageSlick