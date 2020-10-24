import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';




// Create item component
const ProjectCarousel = ({ data, current, clickHandler, pauseHandler }) => {
    const [activeIndex, setActiveIndex] = useState((current -1));
// sort data

    useEffect(() => {
        setActiveIndex(current);
    }, [current])

    return (

        <div className='carousel__container'  onMouseEnter={() => pauseHandler(true)}  onMouseLeave={() => pauseHandler(false)}  >
            <Carousel items={data} activeHandler={clickHandler} current={current}>
                {({ image }, i) => (
                    <CarouselItem data={data[i]} active={(activeIndex === i)} />
                )}
            </Carousel>
        </div>
    );
}

export default ProjectCarousel;