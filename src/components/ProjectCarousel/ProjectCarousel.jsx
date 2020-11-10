import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import styled from 'styled-components';
import DeviceSize from '../../styles/mixins/DeviceSizes';

const CarouselContainer = styled.div`
    height: 420px;
    width: 100%;
    position: relative;
    ${DeviceSize.tablet(`
        height: auto;
    `)}
`;

const ProjectCarousel = ({ data, current, clickHandler, pauseHandler }) => {
    const [activeIndex, setActiveIndex] = useState((current -1));

    useEffect(() => {
        setActiveIndex(current);
    }, [current])

    return (

        <CarouselContainer className='carousel__container'  onMouseEnter={() => pauseHandler(true)}  onMouseLeave={() => pauseHandler(false)}  >
            <Carousel items={data} activeHandler={clickHandler} current={current}>
                {({ image }, i) => (
                    <CarouselItem data={data[i]} active={(activeIndex === i)} />
                )}
            </Carousel>
        </CarouselContainer>
    );
}

export default ProjectCarousel;