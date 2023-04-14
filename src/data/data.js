import { BiHomeCircle } from "react-icons/bi"
import { RxGear } from "react-icons/rx"
import { AiOutlineExclamationCircle, AiOutlineContacts } from "react-icons/ai"
import { HiOutlineSquare2Stack } from "react-icons/hi2"

import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const navLinks = [
    { name: 'home', path: "/", icon: BiHomeCircle },
    { name: 'Skills', path: "skills", icon: RxGear },
    { name: 'About', path: "about", icon: AiOutlineExclamationCircle },
    { name: 'Portfolio', path: "portfolio", icon: HiOutlineSquare2Stack },
    { name: 'Contact', path: "contact", icon: AiOutlineContacts },
];

// Social Media Icons

const socialIcons = [
    {
        link: "https://github.com/devakumar88610",
        icon: AiFillInstagram
    },
    {
        link: "https://github.com/devakumar88610",
        icon: AiFillLinkedin
    },

    {
        link: "https://github.com/devakumar88610",
        icon: AiOutlineGithub
    },
];

export { navLinks, socialIcons }