import React, { useState, useEffect, useRef } from 'react';
import StackItem from '../StackItem/StackItem';
import { animated, useSpring } from 'react-spring';
import { useMeasure } from '../Helpers';

const ProjectCarosel = ({ clickHandler, data, active }) => {

    return (

        <section className='carosel_container'>
            <animated.div
                style={{
                }}
                className="carosel_holder"
            >

            </animated.div>
        </section>
    );
}

export default ProjectCarosel;