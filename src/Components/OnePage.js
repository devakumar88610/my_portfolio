import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from './Hero';

const OnePage = () => {
    let { id } = useParams();
    return (
        <div>
            <Hero id={id} />
        </div>
    )
}

export default OnePage