import React from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi2'
import { HashLink as Link } from 'react-router-hash-link'
import { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 700 ? setScroll(true) : setScroll(false)
        })
    })
    return (
        <div className={` ${scroll ? "block" : "hidden"} fixed bottom-5 right-5 z-[1000] transition-all`}>
            <Link smooth to='#' className='bg-primary dark:bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg'>
                <HiOutlineChevronUp className='w-6 h-6 text-white dark:text-slate-800' />
            </Link>
        </div>
    )
}

export default ScrollToTop