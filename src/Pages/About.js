import React from 'react'
import ImageSlick from "../Components/ImageSlick"
import myAvatar from '../assets/Images/my-avatar-1.jpg'
import { HiOutlineCode } from "react-icons/hi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineSpeakerphone } from "react-icons/hi";



const About = () => {
    return (
        <div id='about' className=' dark:bg-primarydark '>
            <div className='container'>
                <div className='flex items-center justify-center mx-auto py-14 gap-10 max-w-xl'>
                    <div className='w-full h-[1px] bg-gray-500/50 mt-4 ' />
                    <div className='text-center'>
                        <h5 className='text-gray-500 text-lg'>About</h5>
                        <h3 className='text-primary font-medium text-5xl'>Myself</h3>
                    </div>
                    <div className='w-full h-[1px] bg-gray-500/50 mt-4 ' />

                </div>
                <div className='w-full flex flex-col lg:flex-col xl:flex-row items-center gap-10'>
                    <div className='max-w-max mx-auto relative'>
                        <img className="h-96 w-72 object-cover rounded-2xl" src={myAvatar} alt="my-avatar" />
                    </div>
                    <div className='flex-1'>
                        <div className=''>
                            <p className=' text-md text-slate-800 dark:text-white '>Welcome to my creative corner! I'm Dev Kumar, a passionate and innovative creative professional specializing in Graphic Design, Web Design, UI/UX, and Digital Marketing. With a deep-rooted love for aesthetics and a knack for digital strategy, I've spent years honing my skills and crafting compelling visuals and digital experiences that captivate audiences and drive results.</p>
                        </div>

                        {/* Cards */}
                        <ul className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 dark:text-white'>
                            <li className='bg-white/50 hover:bg-white dark:bg-primarydark dark:hover:bg-primary-500 p-8 rounded-2xl flex flex-col gap-4 cursor-pointer backdrop-blur-md border border-white/50  hover:-translate-y-2 duration-300'>
                                <HiOutlineDesktopComputer className='w-10 h-10 text-primary' />
                                <h3 className='text-2xl'>Graphic Designer</h3>
                                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure pariatur maiores quam a qui.</p>
                            </li>
                            <li className='bg-white/50 hover:bg-white dark:bg-primarydark dark:hover:bg-primary-500 p-8 rounded-2xl flex flex-col gap-4 cursor-pointer backdrop-blur-md border border-white/50  hover:-translate-y-2 duration-300'>
                                <HiOutlineCode className='w-10 h-10 text-primary' />
                                <h3 className='text-2xl'>Web Designer</h3>
                                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure pariatur maiores quam a qui.</p>
                            </li>
                            <li className='bg-white/50 hover:bg-white dark:bg-primarydark dark:hover:bg-primary-500 p-8 rounded-2xl flex flex-col gap-4 cursor-pointer backdrop-blur-md border border-white/50  hover:-translate-y-2 duration-300'>
                                <HiOutlineSpeakerphone className='w-10 h-10 text-primary' />
                                <h3 className='text-2xl'>Digital Marketer</h3>
                                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure pariatur maiores quam a qui.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Slicker */}
                <div className='bg-white/50 dark:bg-primarydark py-5 rounded-2xl border border-white dark:border-primary/50 backdrop-blur-md mt-10 '>
                    <ImageSlick />
                </div>
            </div>
        </div>
    )
}

export default About