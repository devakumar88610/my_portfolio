import React from "react";
import myAvatar from "../assets/Images/my-avatar.jpeg";
import { socialIcons } from '../data/data'
import TypedText from "./TypedText";

const Hero = () => {
    return (
        <div>
            <div className='container' id="contact">
                <div className='flex lg:flex-row flex-col items-center justify-center text-center h-full gap-10 my-6'>
                    <div className='absolute top-[-50%] -z-10 w-[50%] h-[50%] rounded-full blur-[300px] bg-primary'></div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 ">

                        {/* Hero Contents */}
                        <div className="flex-1 lg:text-left">
                            <h6 className=' text-white/50 font-medium text-lglg:text-2xl'>
                                Hello, I'm Dev Kumarrrrrr
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
                            <div className="flex justify-center gap-4 lg:justify-start">
                                <button className='button-primary'>Resume</button>
                                <button className='button-primary'>Resume</button>
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
                        </div>

                        {/* Hero Image */}
                        <div className=" flex-1 overflow-hidden rounded-3xl border border-primary/50 shadow-2xl">
                            <div>
                                <img className="w-[250px] h-[250px] lg:h-full lg:w-full  hover:scale-110 transition-all duration-500" src={myAvatar} alt="my-avatar" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
