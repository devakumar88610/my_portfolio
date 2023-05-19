import React from "react"
import ImageSlick from "../Components/ImageSlick"
import Figma from "../assets/Icons/Figma.svg"

const Skills = () => {
    return (
        <div id='skills' className='bg-primarylight dark:bg-primarydark py-10 '>
            <div className="container">
                <div className='flex flex-col gap-5 md:gap-10'>
                    <h1 className='text-center text-2xl font-bold uppercase tracking-[0.3rem] text-slate-800/80 dark:text-white/80 '>My Skills</h1>

                    {/* Skills Icon list */}
                    <div className='relative '>
                        <div className='absolute top-0 left-0 w-[100px] h-full 
                        bg-gradient-to-r from-primarylight to-primarylight/0
                        dark:from-primarydark dark:to-primarydark/0 z-50' />
                        <ImageSlick />
                        <div className='absolute top-0 right-0 w-[100px] h-full 
                        bg-gradient-to-l from-primarylight to-primarylight/0
                        dark:from-primarydark dark:to-primarydark/0 z-50' />
                    </div>

                    {/* Skills Card */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='bg-white w-full h-full rounded-2xl shadow-lg pt-10 pb-5 flex flex-col justify-between items-center gap-5 '>
                            <img src={Figma} alt="" />
                            <p className='text-2xl font-semibold text-slate-800'>Graphic Design</p>
                            <button>Read more</button>
                        </div>
                        <div className='bg-white w-full h-full rounded-2xl shadow-lg p-10'>
                            Web Design
                        </div>
                        <div className='bg-white w-full h-full rounded-2xl shadow-lg p-10'>
                            UI/UX Design
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills