import React from "react";
import myAvatar from "../assets/Images/my-avatar.jpeg";

const Hero = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center h-full gap-10 my-[120px]">
                    <div className="">
                        <h6 className=" text-white opacity-60 font-medium text-2xl max-md:text-lg">
                            Hello, I'm Dev Kumarr
                        </h6>
                        <div className="text-6xl max-md:text-4xl p-2 font-bold mb-2">
                            {/* <Typed className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'
                                strings={[
                                    'Graphic Designer',
                                    'Web Developer',
                                ]}
                                typeSpeed={60}
                                backSpeed={60}
                                loop
                            /> */}
                            <h1
                                className="text-transparent bg-clip-text bg-gradient-to-r 
                            from-primary to-secondary"
                            >
                                UI/UX Developer
                            </h1>
                        </div>
                        <p className="text-white mb-5 max-w-4xl max-md:text-sm">
                            Welcome to my portfolio, showcasing my skills in both graphic
                            design and web development. From branding to website design, I
                            have a passion for creating visually appealing and functional
                            projects for my clients.
                        </p>
                        <button className="bg-primary text-white px-5 py-1 border-2 border-primary rounded-full 
                        hover:bg-white hover:text-black ">
                            Click me
                        </button>
                    </div>
                    <div className="bg-white h-[250px] w-[250px] rounded-full overflow-hidden bg-gradient-to-r 
                    from-primary to-secondary p-2">
                        <img
                            className="w-full rounded-full hover:scale-[0.90] transition-all duration-300"
                            src={myAvatar}
                            alt="My Avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
