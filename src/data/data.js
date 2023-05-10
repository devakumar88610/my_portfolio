import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { HiOutlineHome, HiOutlineCodeBracket, HiOutlineUser, HiOutlineSquare2Stack, HiOutlinePhone } from 'react-icons/hi2'

// Navbar Links

const navLinks = [
    {
        name: 'Home', path: "#",
        icon: HiOutlineHome
    },
    {
        name: 'Skills', path: "#skills",
        icon: HiOutlineCodeBracket

    },
    {
        name: 'About', path: "#about",
        icon: HiOutlineUser
    },
    {
        name: 'Portfolio', path: "#portfolio",
        icon: HiOutlineSquare2Stack
    },
    {
        name: 'Contact', path: "#contact",
        icon: HiOutlinePhone
    },
];

// Social Media Icons

const socialIcons = [
    {
        link: "https://www.instagram.com/dev_kumar_developer/",
        icon: AiFillInstagram
    },
    {
        link: "https://www.linkedin.com/in/deva-kumar-939577240/",
        icon: AiFillLinkedin
    },

    {
        link: "https://github.com/devakumar88610",
        icon: AiOutlineGithub
    },
];

export { navLinks, socialIcons }