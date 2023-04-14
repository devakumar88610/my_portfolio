import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";

// Logo import
import Logo from "../assets/Images/Logo-white.svg";

const Header = () => {


    return (
        <nav
            className="w-full border-b border-primary300">
            <div className="container">
                <div className="relative flex h-20  items-center justify-center">
                    <a href="/" className="cursor-pointer">
                        <img
                            className="h-8 hover:opacity-80 transition-opacity duration-300 "
                            src={Logo}
                            alt="Dev Kumar"
                        />
                    </a>
                    <div className="flex items-center ml-auto">
                        <div className="flex items-center">
                            <button className="button-primary">
                                <a href="/">Resume</a>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <NavLink />
                    </div>
                </div>
            </div>


        </nav>
    );
};

export default Header;
