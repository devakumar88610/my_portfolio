import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {

    const typedTextRef = useRef(null);

    useEffect(() => {
        if (typedTextRef.current) {
            const typed = new Typed(typedTextRef.current, {
                strings: ['Web Developer', 'Graphic Designer', 'Digital Marketer'],
                typeSpeed: 50,
                backSpeed: 50,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);
    return (
        <div >
            <h1 className='text-3xl lg:text-5xl font-semibold py-3 text-primary'><span ref={typedTextRef}></span></h1>
        </div>
    );
}

export default TypedText