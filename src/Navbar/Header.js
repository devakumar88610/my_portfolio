import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import NavMob from "./NavMob";
import { HiBars3, HiSun, HiMoon } from "react-icons/hi2"

// Logo import
import Logo from "../assets/Images/Logo-white.svg";
import Logo2 from "../assets/Images/Logo-color.svg"

const Header = () => {

    const [darkmode, setDarkmode] = useState(false);
    const [open, setOpen] = useState(false)
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setScroll(true) : setScroll(false)
        })
    })

    const openMobileNav = () => {
        setOpen(true)
    }
    const closeMobileNav = () => {
        setOpen(false)
    }

    return (
        <div>
            <nav
                className={`bg-primarylight/80 dark:bg-[#190835] fixed top-0 left-0 shadow-lg border-primary300 w-full backdrop-blur-md z-[100] transition-all duration-300
                ${scroll ? "-translate-y-20" : "translate-x-0"}`}>
                <div className="container">
                    <div className=" flex h-20 items-center justify-between select-none">
                        <a href="/" className="cursor-pointer">
                            <img
                                className="none h-8 hover:opacity-80 transition-opacity duration-300 "
                                src={darkmode ? Logo : Logo2}
                                alt="Dev Kumar"
                            />
                        </a>
                        <div className='mx-auto relative hidden lg:block mr-4'>
                            <NavLink />
                        </div>
                        <div className="flex items-center ml-auto">
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    if (darkmode) {
                                        document.body.classList.remove("dark");
                                        setDarkmode(false);
                                    } else {
                                        document.body.classList.add("dark");
                                        setDarkmode(true);
                                    }
                                }}
                            >
                                {darkmode ? (
                                    <HiSun className="h-6 w-6 dark:text-white" />
                                ) : (
                                    <HiMoon className="h-6 w-6 text-primarydark" />
                                )}
                            </div>
                            <div >
                                <HiBars3 onClick={openMobileNav} className="h-6 w-6 ml-5 text-slate-600 dark:text-white cursor-pointer block lg:hidden" />
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center">
                {
                    setOpen && <NavMob open={open} onClose={closeMobileNav} />
                }
            </div>
        </div>
    );
};

export default Header;
