import React, { useState, useEffect } from 'react';
import StackItem from '../StackItem/StackItem';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { a } from 'react-spring';

const Content = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`

// Create item component
const CarouselItem = ({ data, active }) => {
    const [activeState, setActiveState] = useState(active);
    const { id, title, image, status, desc, stack, duration, link, video } = data;
    // sort data
    let stackItems = stack.map((item) => <StackItem key={uuid()} type={item} active={activeState} />);


    useEffect(() => {
        setActiveState(active);
    }, [active])

    return (
        <Content className='carosel__item-container'>
            <div className={'carosel__item-content'}>
                <h1>{title}</h1>

                <p>{desc}</p>

                <span>{duration}</span>

                <div className="stack">

                    {/* {activeState && stackItems} */}

                </div>
            </div>
            <Image style={{ backgroundImage: `url(${image[0]})` }} className={'carosel__item-image'} />
        </Content>
    );
}

export default CarouselItem;