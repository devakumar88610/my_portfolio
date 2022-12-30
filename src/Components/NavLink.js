import React from 'react'
import navLinks from "../data/navlink"

const NavLink = () => {

    return (
        <nav>
            <ul className='flex space-x-6'>
                {
                    navLinks.map(({ name, path }, index) => {
                        return <li key={index}>
                            <a className='hover:text-primary transition-all duration-300' href={path}>{name}</a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default NavLink