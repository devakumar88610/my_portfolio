import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { HashLink as Link } from 'react-router-hash-link'

const ScrollToTop = () => {
    return (
        <div className='fixed bottom-5 right-5 z-[1000]'>
            <Link smooth to='#' className='bg-primary dark:bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg'>
                <MdKeyboardArrowUp className='w-8 h-8 text-white dark:text-slate-800' />
            </Link>
        </div>
    )
}

export default ScrollToTop