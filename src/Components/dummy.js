import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Photoshop from "../assets/Icons/AfterEffects.svg"

const images = [
    Photoshop,
    "https://via.placeholder.com/150x150?text=Image%202",
    "https://via.placeholder.com/150x150?text=Image%203",
];

const sliderVariants = {
    enter: { x: "0%" },
    center: { x: "-100%" },
    exit: { x: "-200%" },
};

const Dummy = () => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <AnimatePresence initial={false}>
                <motion.img
                    className="w-10 h-10"
                    key={imageIndex}
                    src={images[imageIndex]}
                    alt="Slider Image"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        duration: 2,
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

export default Dummy;