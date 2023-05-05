import React from 'react'
import { DiHtml5, DiCss3 } from "react-icons/di"
import { SiJavascript } from "react-icons/si"

const Skills = () => {
    return (
        <div className="container" id="skills">
            <div className='h-20 my-10 bg-primary500 border border-primary300 rounded-xl text-white flex items-center gap-4 p-5 '>
                <h1>My Skills</h1>
                <div className='flex items-center justify-between gap-2 opacity-50 w-full overflow-hidden'>
                    <DiHtml5 className='h-8 w-8' />
                    <DiCss3 className='h-8 w-8' />
                    <SiJavascript className='h-7 w-7' />
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Html</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>CSS</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>
                    <h1 className='bg-white text-primary500 py-1 px-3 rounded-lg '>Javascript</h1>

                </div>
            </div>
        </div>
    )
}

export default Skills