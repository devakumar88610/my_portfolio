import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import NavMob from "./NavMob";

// Logo import
import LogoColor from "../assets/Images/Logo-color.svg";
import LogoWhite from "../assets/Images/Logo-white.svg";

const Header = () => {
    const [bg, setBg] = useState(false);
    const [logo, setLogo] = useState(LogoWhite);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            return window.scrollY > 50 ? setLogo(LogoColor) : setLogo(LogoWhite);
        });
    });

    return (
        <nav
            className={`${bg ? "bg-white" : "bg-primarydark text-white"
                } w-full fixed top-0 z-10 transition-all duration-300`}
        >
            <div className="container">
                <div className="relative flex h-20 items-center">
                    <a href="/" className="cursor-pointer">
                        <img
                            className="h-8 hover:opacity-80 transition-opacity duration-300 "
                            src={logo}
                            alt="Dev Kumar"
                        />
                    </a>
                    <div className="mx-auto relative hidden lg:block mr-4">
                        <NavLink />
                    </div>
                    <div className="flex ml-auto">
                        <div className="flex items-center">
                            <button className="button-primary">
                                <a href="/">Resume</a>
                            </button>
                        </div>
                        <div
                            className="ml-4 lg:hidden cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            {!open ? (
                                <svg
                                    className={`h-8 ease-in-out duration-300`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-8 hover:rotate-90 ease-in-out duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar Mobile */}
            <div
                className={`${open
                    ? "fixed top-20 left-0 lg:hidden bg-primary500 h-sceen w-screen border-t border-primary400 transition-all duration-300"
                    : "fixed left-[-100%]"
                    } `}
            >
                <div className="space-y-1  ">{open && <NavMob />}</div>
            </div>
        </nav>
    );
};

export default Header;
