import React from "react";
import NavLink from "./NavLink";

// Logo import
import Logo from "../assets/Images/Logo-white.svg";
import NavMob from "./NavMob";

const Header = () => {



    return (
        <nav
            className="w-full border-b border-primary300">
            <div className="container">
                <div className=" flex h-20 items-center justify-between">
                    <a href="/" className="cursor-pointer">
                        <img
                            className="h-8 hover:opacity-80 transition-opacity duration-300 "
                            src={Logo}
                            alt="Dev Kumar"
                        />
                    </a>
                    <div className='mx-auto relative hidden lg:block mr-4'>
                        <NavLink />
                    </div>
                    <div className="flex items-center ml-auto">
                        <div className="flex items-center">
                            <button className="button-primary">
                                <a href="/">Contact</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <NavMob />
            </div>

        </nav>
    );
};

export default Header;
