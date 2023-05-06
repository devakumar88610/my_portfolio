import React, { useState } from "react";
import NavLink from "./NavLink";
import NavMob from "./NavMob";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai"

// Logo import
import Logo from "../assets/Images/Logo-white.svg";
import Logo2 from "../assets/Images/Logo-color.svg"

const Header = () => {

    const [darkmode, setDarkmode] = useState(false);
    const [open, setOpen] = useState(false)

    const openMobileNav = () => {
        setOpen(true)
    }
    const closeMobileNav = () => {
        setOpen(false)
    }

    return (
        <div>
            <nav
                className="bg-primarylight/80 dark:bg-primary500/80 fixed top-0 left-0 shadow-lg border-primary300 w-full backdrop-blur-md z-[1000]">
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
                            <div className="flex items-center gap-5">
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
                                        <RiSunFill className="h-6 w-6 dark:text-white" />
                                    ) : (
                                        <RiMoonFill className="h-6 w-6 text-primarydark" />
                                    )}
                                </div>
                                <div >
                                    <AiOutlineMenu onClick={openMobileNav} className="h-6 w-6 text-slate-600 dark:text-white cursor-pointer block lg:hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center">
                {
                    setOpen && <NavMob darkmode={darkmode} open={open} onClose={closeMobileNav} />
                }
            </div>
        </div>
    );
};

export default Header;
