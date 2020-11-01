import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StackItem from '../StackItem/StackItem';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { a } from 'react-spring';
import Timestamp from '../Timestamp/Timestamp';

const Content = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  background-image: url(${(props) => props.url ? `${props.url}` : ''});
  filter: blur(${(props) => props.light === 'true' ? '2px' : '5px'});
  &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #00000087;
  }
`

// Create item component
const CarouselItem = ({ data, active }) => {
    const [activeState, setActiveState] = useState(active);
    const { id, title, image, desc, stack, start, end } = data;

    let stackItems = stack.map((item) => <StackItem key={uuid()} type={item} active={activeState} />);


    useEffect(() => {
        setActiveState(active);
    }, [active])

    return (
        <Link to={`/project/${id}`}>
            <Content className='carousel__item-container'>
                <div className={'carousel__item-holder'}>
                    <h1>{title}</h1>
                    <div className='carousel__item-content'>
                        <div className='carousel__item-info'>
                        <p>{desc}</p>

                        <span><Timestamp options={{ type: 'duration', case: 'title' }} start={start} end={end} /></span>
                        </div>

                        <div className="stack">

                            {stackItems}

                        </div>
                    </div>
                </div>
                {/* className={'carousel__item-image'} */}
                <Image style={{ backgroundImage: `url(${image[0].img})` }} alt={image[0].alt} url={image[0]} light={(title === 'Blockr').toString()} />
            </Content>
        </Link>
    );
}

export default CarouselItem;