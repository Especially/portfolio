import React, { useState, useEffect, useRef } from 'react';
import StackItem from '../StackItem/StackItem';
import { animated, useSpring } from 'react-spring';
import { useMeasure } from '../Helpers';
import { v4 as uuid } from 'uuid';

const ProjectItem = ({ clickHandler, data, active }) => {
    const [activeState, _setActiveState] = useState(active);
    const [stack] = useState(data.stack.sort());
    const [showStack, _setShowStack] = useState(false);
    const showStackRef = useRef(showStack);
    const setShowStack = data => {
        showStackRef.current = data;
        _setShowStack(data);
    };
    const [bind, { height: elHeight }] = useMeasure();
    // Need useRef in order to obtain the current state for functions which are stored outside the scope of our component (e.g., event listeners)
    // using .current will contain our most up-to-date state
    const activeStateRef = useRef(activeState);
    const setActiveState = data => {
        activeStateRef.current = data;
        _setActiveState(data);
    };

    const [contentProps, setContent] = useSpring(() => ({
        from: { height: 0 },
        to: { height: activeState ? elHeight : 0 },
        onRest: () => {
            handleStack();
        }
    })
    );

    useEffect(() => {
        setActiveState(active);
    }, [active])

    useEffect(() => {
        setContent({
            from: { height: 0 },
            to: { height: activeState ? elHeight : 0 },
            onRest: () => {
                handleStack();
            }
        })
    }, [activeState, elHeight])

    const handleStack = () => {
        (activeStateRef.current) ? setShowStack(true) : setShowStack(false);
    }


    // Handling stack items
    let stackItems = stack.map((item) => <StackItem key={uuid()} type={item} active={showStack} />);

    return (

        <section className={`accordion__container ${(activeState) && 'accordion__container--active'}`}>
            <div className="accordion__head" onClick={() => clickHandler(data.id)}>
                <h2>{data.title}</h2>
                <span className={`accordion__icon ${(activeState) && 'accordion__icon--active'}`}></span>
            </div>
            <animated.div
                style={{
                    ...contentProps
                }}
                className="accordion__holder"
            >
                <div className="accordion__content" {...bind}>
                    <p>{data.desc}</p>

                    <span>{data.duration}</span>

                    <div className="stack">

                        {showStack ? stackItems : <StackItem type={'null'} active={true} />}

                    </div>
                </div>
            </animated.div>
        </section>
    );
}

export default ProjectItem;