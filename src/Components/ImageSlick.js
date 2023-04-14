import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { slickImages } from "../data/data";

const ImageSlick = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container mb-6">
            <div className="h-20 bg-primary400/50 flex items-center rounded-full overflow-hidden px-8">
                <h1 className="mr-4 text-white">Technical Skills</h1>
                <Slider {...settings}>
                    {
                        slickImages.map((image, index) => {
                            return <div key={index} className="bg-white flex justify-between ">
                                <img className="h-10 bg-transparent" src={image.url} alt={image.alt} />
                            </div>
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default ImageSlick