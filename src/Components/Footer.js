import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
    return (
        <div className='mb-20 lg:my-0 border-t border-primary300 flex justify-center items-center'>
            <h1 className='text-white/50 mt-5 lg:my-5'>Designed by <Link smooth to='#/' className='text-primary'>Dev Kumar</Link> &copy; copyrights 2023</h1>
        </div>
    )
}

export default Footer