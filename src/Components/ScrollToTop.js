import React from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi2'
import { HashLink as Link } from 'react-router-hash-link'

const ScrollToTop = () => {
    return (
        <div className='fixed bottom-5 right-5 z-[1000]'>
            <Link smooth to='#' className='bg-primary dark:bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg'>
                <HiOutlineChevronUp className='w-6 h-6 text-white dark:text-slate-800' />
            </Link>
        </div>
    )
}

export default ScrollToTop