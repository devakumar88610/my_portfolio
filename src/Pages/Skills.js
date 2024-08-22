import React from "react"
import GraphicDesign from "../assets/Images/Graphic Design.jpg"
import WebDesign from "../assets/Images/Web Design.jpg"
import UIUX from "../assets/Images/UIUX Design.jpg"

const Skills = () => {
    return (
        <div id='skills' className=' dark:bg-primarydark py-20 '>
            <div className="container">
                <div className='flex flex-col gap-5 md:gap-10'>
                    <h1 className='text-center text-3xl lg:text-5xl font-bold text-gradient'>My Skills</h1>

                    {/* Skills Card */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {/* Card 1 */}
                        <div className='bg-white w-full h-full shadow-lg hover:shadow-2xl 
                                        duration-300 border border-gray-300 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px]'>
                            <div className='overflow-hidden'>
                                <img className='object-cover h-60 w-full hover:scale-110 transition-all duration-500'
                                    src={GraphicDesign} alt="Graphic Design" />
                            </div>
                            <div className='p-8'>
                                <h4 className='text-2xl font-semibold text-slate-800 mb-5'>Graphic Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel quis enim quisquam, provident eum.</p>
                                <button className="flex gap-3 bg-primary hover:bg-primary-200 duration-500 text-white px-6 py-2 mt-5 rounded-full">Read more
                                    <i className="w-3 h-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                    </i>
                                </button>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className='bg-white w-full h-full shadow-lg hover:shadow-2xl 
                                        duration-300 border border-gray-300 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px]'>
                            <div className='overflow-hidden'>
                                <img className='object-cover h-60 w-full hover:scale-110 transition-all duration-500'
                                    src={WebDesign} alt="Web Design" />
                            </div>
                            <div className='p-8'>
                                <h4 className='text-2xl font-semibold text-slate-800 mb-5'>Web Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel quis enim quisquam, provident eum.</p>
                                <button className="flex gap-3 bg-primary hover:bg-primary-200 duration-500 text-white px-6 py-2 mt-5 rounded-full">Read more
                                    <i className="w-3 h-3 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                    </i>
                                </button>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className='bg-white w-full h-full shadow-lg hover:shadow-2xl 
                                        duration-300 border border-gray-300 rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-10px]'>
                            <div className='overflow-hidden'>
                                <img className='object-cover h-60 w-full hover:scale-110 transition-all duration-500'
                                    src={UIUX} alt="UI/UX Design" />
                            </div>
                            <div className='p-8'>
                                <h4 className='text-2xl font-semibold text-slate-800 mb-5'>UI/UX Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel quis enim quisquam, provident eum.</p>
                                <button className="flex gap-3 bg-primary hover:bg-primary-200 duration-500 text-white px-6 py-2 mt-5 rounded-full">Read more
                                    <i className="w-3 h-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                    </i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills