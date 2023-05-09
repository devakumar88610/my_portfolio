import React from "react";
import myAvatar from "../assets/Images/my-avatar-1.jpg";
import { socialIcons } from '../data/data'
import { FiDownload } from 'react-icons/fi'
import TypedText from "./TypedText";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className=" bg-primarylight dark:bg-primarydark pt-20 lg:pt-10 h-full lg:h-screen overflow-hidden">

            {/* Background Gradient */}
            <div className='absolute top-0 left-0 w-[30%] h-[30%] rounded-full blur-[300px] bg-primary' />
            <div className='absolute top-0 right-0 w-[30%] h-[30%] rounded-full blur-[300px] bg-secondary/80' />

            <div className='container' id="/">
                <div className='flex lg:flex-row flex-col items-center justify-center text-center h-full lg:h-screen gap-10 py-10'>

                    {/* Hero Contents */}
                    <motion.div className="flex-1 lg:text-left"
                        initial={{ x: '-50vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring', duration: 1, bounce: 0.2,
                        }}>
                        <h6 className='text-slate-800/50 dark:text-white/50 font-medium text-lg lg:text-2xl'>
                            Hello, I'm Dev Kumar
                        </h6>
                        <div className='text-gradient'>
                            <TypedText />
                        </div>
                        <p className='text-slate-800 dark:text-white mb-5 max-w-4xl text-sm lg:text-base '>
                            Welcome to my portfolio, showcasing my skills in both graphic
                            design and web development. From branding to website design, I
                            have a passion for creating visually appealing and functional
                            projects for my clients.
                        </p>

                        {/* Hero Buttons */}
                        <div className="flex justify-center gap-4 lg:justify-start my-0 lg:my-10">
                            <button className='button-primary'>Hire Me</button>
                            <button className='button-secondary p-0 pl-4 flex items-center gap-2'>Resume
                                <div className="bg-secondary text-slate-800 w-10 h-10 rounded-full flex justify-center items-center 
                                    hover:bg-primary hover:text-white transition-all duration-500">
                                    <FiDownload className="w-5 h-5 " />
                                </div>
                            </button>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center justify-center lg:justify-start gap-10 mt-5">
                            {
                                socialIcons.map(({ link, icon: Icon }, index) => {
                                    return <div key={index} className="">
                                        <a href={link} target="_blank" rel="noreferrer"><Icon className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white h-7 w-7 transition-all duration-500" /></a>
                                    </div>
                                })
                            }
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div className=" flex-1 overflow-hidden rounded-3xl border border-primary/50 shadow-xl"
                        initial={{ x: '50vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring', delay: 0.5, duration: 1, bounce: 0.2
                        }}>
                        <div>
                            <img className="w-[250px] h-[250px] lg:h-full lg:w-full hover:scale-110 transition-all duration-500" src={myAvatar} alt="my-avatar" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
