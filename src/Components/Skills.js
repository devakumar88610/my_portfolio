import React from 'react'
import Slider from "react-slick";

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


const Skills = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div id='skills' className='bg-primarylight dark:bg-primarydark lg:h-screen py-10'>
            <div className="container" id="skills">
                <div className='flex flex-col gap-5 md:gap-10'>

                    {/* Skills Icon list */}
                    <div className='relative '>
                        <div className='absolute top-0 left-0 w-[100px] h-full 
                        bg-gradient-to-r from-primarylight to-primarylight/0
                        dark:from-primarydark dark:to-primarydark/0 z-50' />
                        <Slider {...settings}>
                            {
                                skillsIcons.map((Icons, index) => (
                                    <div key={index} className='flex items-center transition-all duration-500'>
                                        <img src={Icons} alt="Hello" className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] mx-auto' />
                                    </div>
                                ))
                            }
                        </Slider>
                        <div className='absolute top-0 right-0 w-[100px] h-full 
                        bg-gradient-to-l from-primarylight to-primarylight/0
                        dark:from-primarydark dark:to-primarydark/0 z-50' />
                    </div>
                    <div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='bg-white w-full h-80 rounded-2xl shadow-lg'>

                    </div>
                    <div className='bg-white w-full h-80 rounded-2xl shadow-lg'>

                    </div>
                    <div className='bg-white w-full h-80 rounded-2xl shadow-lg'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills