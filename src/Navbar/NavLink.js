import React from 'react'
import { navLinks } from "../data/data"
import { NavLink as Nav } from 'react-router-dom'

const NavLink = () => {

    return (
        <nav className='bg-primary500/50 fixed bottom-0 left-0 w-full backdrop-blur-md md:w-[500px] z-50'>
            <div className=' flex items-center justify-center h-[60px]'>
                {
                    navLinks.map(({ path, icon: Icons }, index) => {
                        return <Nav key={index} to={path} className='mx-auto'>
                            <div className='flex items-center justify-center text-white hover:bg-white hover:text-primary rounded-full p-2 transition-all duration-500'>
                                <Icons className='w-6 h-6' activeClassName="bg-white text-primary" />

                            </div>
                        </Nav>
                    })
                }
            </div>

        </nav>
    )
}

export default NavLink