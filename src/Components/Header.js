import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import NavMob from './NavMob';

// Logo import
import LogoWhite from "../assets/Images/Logo-white.svg"
import LogoColor from "../assets/Images/Logo-color.svg"

const Header = () => {
    const [bg, setBg] = useState(false);
    const [logo, setLogo] = useState(LogoWhite);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setLogo(LogoColor) : setLogo(LogoWhite)
        })
    })

    return (
        <nav className={`${bg ? 'bg-white ' : ' bg-dark text-white'} border-1 fixed top-0 w-full z-10 transition-all duration-300`}>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='relative flex h-20 items-center'>
                    <div className='cursor-pointer'>
                        <img className='h-8' src={logo} alt="" />
                    </div>
                    <div className='mx-auto relative hidden lg:block mr-4'>
                        <NavLink />
                    </div>
                    <div className='flex ml-auto'>
                        <div className=''>
                            <button className='bg-primary text-white rounded-full px-5 py-1 border-2 border-white hover:bg-secondary hover:text-black transition-all duration-300'>
                                <a href="/">Resume</a>
                            </button>
                        </div>
                        <div className='ml-4'>
                            <svg className={`${open ? "hidden" : "active"} lg:hidden h-8 cursor-pointer`} onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <svg className={`${open ? "active" : "hidden"} hover:rotate-180 transition duration-300 lg:hidden h-8 cursor-pointer`} onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar Mobile */}
            <div className={`${open ? "left-[-1000px]" : "right-[1000px]"} lg:hidden bg-dark h-sceen transition-all duration-300`}>
                <div className='space-y-1  '>
                    {open && <NavMob />}
                </div>
            </div>
        </nav >
    )
}

export default Header