import React from "react";
import NavLink from "./NavLink";

// Logo import
import Logo from "../assets/Images/Logo-white.svg";
import NavMob from "./NavMob";

const Header = () => {



    return (
        <nav id="/"
            className="w-full border-b border-primary300">
            <div className="container">
                <div className=" flex h-20 items-center justify-between select-none">
                    <a href="/" className="cursor-pointer">
                        <img
                            className="none h-8 hover:opacity-80 transition-opacity duration-300 "
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
                                <a href="tel:919900760225">Contact</a>
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
