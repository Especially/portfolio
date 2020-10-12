import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';




// Create item component
const ProjectCarosel = ({ data, current, clickHandler }) => {
    const [activeIndex, setActiveIndex] = useState((current -1));
// sort data

    useEffect(() => {
        setActiveIndex(current -1);
    }, [current])

    return (

        <div className='carosel__container'>
            <Carousel items={data} activeHandler={clickHandler} current={current}>
                {({ image }, i) => (
                    <CarouselItem data={data[i]} active={(activeIndex === i)} />
                )}
            </Carousel>
        </div>
    );
}

export default ProjectCarosel;