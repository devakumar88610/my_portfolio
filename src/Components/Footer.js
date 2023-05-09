import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Footer = () => {
    return (
        <div className='bg-primarylight dark:bg-primarydark'>
            <div className='py-5 flex justify-center items-center select-none'>
                <h1 className='text-slate-800 dark:text-white/50'>Designed by&nbsp;
                    <Link smooth to='#/' className='text-primary hover:text-secondary transition-all text-sm md:text-base'>
                        Dev Kumar</Link> &copy; copyrights 2023</h1>
            </div>
        </div>
    )
}

export default Footer