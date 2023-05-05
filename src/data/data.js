import { BiHomeCircle } from "react-icons/bi"
import { RxGear } from "react-icons/rx"
import { AiOutlineExclamationCircle, AiOutlineContacts } from "react-icons/ai"
import { HiOutlineSquare2Stack } from "react-icons/hi2"

import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const navLinks = [
    {
        name: 'Home', path: "#home",
        icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    },
    {
        name: 'Skills', path: "#skills",
        icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"

    },
    {
        name: 'About', path: "#about",
        icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    },
    {
        name: 'Portfolio', path: "#portfolio",
        icon: "M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6"
    },
    {
        name: 'Contact', path: "#contact",
        icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
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