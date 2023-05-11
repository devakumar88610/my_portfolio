import React from 'react'
import { navLinks } from '../data/data'
import { HashLink as Link } from 'react-router-hash-link'
import { HiOutlineXMark } from 'react-icons/hi2'
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
                        navLinks.map(({ path, name, icon: Icon }, index) => {
                            return <Link smooth key={index} to={path} className='mx-auto'>
                                <div className='flex items-center gap-5 py-5'>
                                    <Icon className='w-6 h-6' />
                                    <p>{name}</p>
                                </div>
                            </Link>
                        })
                    }
                </div>
                <div className='absolute -right-3.5 top-7 flex justify-center items-center w-6 h-6 rounded-full bg-red-500'>
                    <HiOutlineXMark onClick={onClose} className=' text-white w-5 h-5 cursor-pointer' />
                </div>
            </nav>
        </div>
    )
}

export default NavMob