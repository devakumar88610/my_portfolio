import React, { useState, useEffect } from 'react'
import navLinks, { socialIcons } from '../data/navlink'

const NavMob = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return (
        <nav className={`${bg ? '' : 'bg-dark'} flex flex-col content-center list-none h-screen text-white transition-all duration-300`}>
            <div className='border-b-2 border-primary  cursor-pointer'>
                {
                    navLinks.map(({ name, path, icon }, index) => {
                        return <a href={path} className='flex items-center px-5 py-2 hover:bg-purple-900 hover:text-white' key={index}>
                            <div className=' flex justify-center items-center bg-primary text-white h-8 w-8 rounded-full'>
                                <button className={icon}></button>
                            </div>
                            <a className='transition-all duration-300 p-5' href={path}>{name}</a>
                        </a>
                    })
                }
            </div>
            <div className='flex justify-center py-8 space-x-8 text-2xl'>
                {
                    socialIcons.map(({ link, icon }, index) => {
                        return <li key={index}>
                            <a href={link} className={`${icon} opacity-50 hover:opacity-100`} target="_blank" rel="noopener noreferrer"></a>
                        </li>
                    })
                }
            </div>
        </nav>
    )
}

export default NavMob