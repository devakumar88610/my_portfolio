import React, { useState } from 'react'
import { navLinks } from "../data/data"
import { HashLink as Link } from 'react-router-hash-link'

const NavLink = () => {

    const [active, setActive] = useState(0)

    return (
        <nav>
            <ul className='flex space-x-8 '>
                {
                    navLinks.map(({ name, path }, index) => {
                        return <li key={index}>
                            <Link smooth onClick={() => setActive(index)} className='text-white hover:text-primary transition-all duration-300' to={path}>{name}</Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default NavLink