import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

// Graphic Skills Import
import Photoshop from "../assets/Icons/Photoshop.svg"
import Illustrator from "../assets/Icons/Illustrator.svg"
import InDesign from "../assets/Icons/InDesign.svg"
import AfterEffects from "../assets/Icons/AfterEffects.svg"
import Xd from "../assets/Icons/Xd.svg"
import Figma from "../assets/Icons/Figma.svg"


const slickImages = [Photoshop, Illustrator, InDesign, AfterEffects, Xd, Figma]


const ImageSlick = () => {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="container mb-6">
            <h1 className="mr-4 text-white">Technical Skills</h1>
            <Slider {...settings}>
                {
                    slickImages.map((image, index) => {
                        return <div key={index} className="bg-white flex  ">
                            <img className="bg-transparent" src={image} alt={image.alt} />
                        </div>
                    })
                }
            </Slider>
        </div>
    )
}

export default ImageSlick