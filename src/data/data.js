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

// slick slider images

const slickImages = [
    {
        url: "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
        alt: "Image 1",
    },
    {
        url: "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
        alt: "Image 2",
    },
    {
        url: "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
        alt: "Image 3",
    },
    {
        url: "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
        alt: "Image 3",
    },
    {
        url: "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
        alt: "Image 3",
    },
];

export { navLinks, socialIcons, slickImages }