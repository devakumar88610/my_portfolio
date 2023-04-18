import React from "react";
import myAvatar from "../assets/Images/my-avatar.jpeg";
import { socialIcons } from '../data/data'
import { AiOutlineDownload } from 'react-icons/ai'
import TypedText from "./TypedText";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div>
            <div className='container' id="home">
                <div className='flex lg:flex-row flex-col items-center justify-center text-center h-full gap-10 py-6'>
                    <div className='absolute top-[-50%] -z-10 w-[50%] h-[50%] rounded-full blur-[300px] bg-primary' />
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 select-none">

                        {/* Hero Contents */}
                        <motion.div className="flex-1 lg:text-left"
                            initial={{ x: '-100vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: 'spring', duration: 1, bounce: 0.2,
                            }}>
                            <h6 className=' text-white/50 font-medium text-lglg:text-2xl'>
                                Hello, I'm Dev Kumar
                            </h6>
                            <div className='text-gradient'>
                                <TypedText />
                            </div>
                            <p className='text-white mb-5 max-w-4xl text-sm lg:text-base '>
                                Welcome to my portfolio, showcasing my skills in both graphic
                                design and web development. From branding to website design, I
                                have a passion for creating visually appealing and functional
                                projects for my clients.
                            </p>
                            <div className="flex justify-center gap-4 lg:justify-start my-0 lg:my-10">
                                <button className='button-primary'>Hire Me</button>
                                <button className='button-secondary flex items-center gap-2'>Resume
                                    <AiOutlineDownload className="w-5 h-5 animate-bounce" />
                                </button>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex items-center justify-center lg:justify-start gap-10 mt-5 ">
                                {
                                    socialIcons.map(({ link, icon: Icon }, index) => {
                                        return <div key={index} className="">
                                            <a href={link}><Icon className="text-white/50 hover:text-white h-6 w-6 transition-all duration-500" /></a>
                                        </div>
                                    })
                                }
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div className=" flex-1 overflow-hidden rounded-3xl border border-primary/50 shadow-2xl"
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
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
        </div>
    );
};
export default Hero;
