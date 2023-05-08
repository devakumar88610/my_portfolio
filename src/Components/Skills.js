import React from 'react'
import { skillsIconGraphic } from '../data/data'

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

const graphicIcons = [Photoshop, Illustrator, InDesign, AfterEffects, Xd, Figma]
const developerIcons = [Html, Css, Javascript, Bootstrap, Tailwind, Python, Node]


const Skills = () => {
    return (
        <div id='skills' className='bg-primarylight dark:bg-primarydark py-10'>
            <div className="container" id="skills">
                <div className='flex flex-col gap-5 md:gap-10'>
                    <div className='flex justify-center items-center gap-5 md:gap-[60px] transition-all duration-500'>
                        {
                            graphicIcons.map((Icons, index) => (
                                <div key={index}>
                                    <img src={Icons} alt="Hello" className='w-10 h-10 md:w-[50px] md:h-[50px] rounded-full shadow-md  ' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-center items-center gap-5 md:gap-[60px] transition-all duration-500'>
                        {
                            developerIcons.map((Icons, index) => (
                                <div key={index}>
                                    <img src={Icons} alt="Hello" className='w-10 h-10 md:w-[50px] md:h-[50px] rounded-full shadow-md  ' />
                                </div>
                            ))
                        }
                    </div>
                    <div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
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