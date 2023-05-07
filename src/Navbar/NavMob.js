import React from 'react'
import { navLinks } from '../data/data'
import { HashLink as Link } from 'react-router-hash-link'
import { AiFillLeftCircle } from 'react-icons/ai'
import Logo from "../assets/Images/Logo-white.svg"
import Logo2 from "../assets/Images/Logo-color.svg"

const NavMob = ({ open, onClose, darkmode }) => {
    return (
        <div className=''>
            <nav className={`fixed left-0 top-0 flex flex-col h-screen w-[60%] md:w-[30%] z-[110] shadow-lg transition-all bg-primarylight dark:bg-primarydark 
        dark:text-white lg:hidden
        ${open ? "translate-x-0" : "-translate-x-[120%]"
                }`} >
                <div className='flex items-center h-20 pl-4 md:pl-6'>
                    <a href="/" className="cursor-pointer">
                        <img
                            className="none h-8 hover:opacity-80 transition-opacity duration-300 "
                            src={darkmode ? Logo : Logo2}
                            alt="Dev Kumar"
                        />
                    </a>
                </div>
                <div className='px-4 md:px-6'>
                    {
                        navLinks.map(({ path, name, icon }, index) => {
                            return <Link smooth key={index} to={path} className='mx-auto'>
                                <div className='flex items-center gap-5 py-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path d={icon} />
                                    </svg>
                                    <p>{name}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
                <AiFillLeftCircle onClick={onClose} className='absolute -right-3.5 text-primary top-7 w-7 h-7 cursor-pointer' />
            </nav>
        </div>
    )
}

export default NavMob