import React, { useState, useEffect, useRef } from 'react';
import { a, useSpring } from 'react-spring';
import { useMeasure } from '../Helpers';

const ProjectItem = ({ clickHandler, data, active, index, nextHandler, pause }) => {
    const [activeState, _setActiveState] = useState(active);
    const [pauseState, _setPauseState] = useState(pause);
    const pauseStateRef = useRef(pause);
    const setPauseState = (data) => {
        pauseStateRef.current = data;
        _setPauseState(data);

    }
    const activeStateRef = useRef(active);
    const setActiveState = (data) => {
        activeStateRef.current = data;
        _setActiveState(data);
    }

    const [bind, { width: elWidth }] = useMeasure();


    const [contentProps, setContent] = useSpring(() => ({
        from: { width: 0 },
        to: { width: activeState ? elWidth : 0 },
        onRest: () => {
            activeStateRef.current && nextHandler(index);
            setActiveState(false);
        },
        pause: pauseStateRef.current,
        config: {
            duration: 7200
        }
    })
    );

    useEffect(() => {
        setActiveState(active);
    }, [active])

    useEffect(() => {
        pauseState !== pause && setPauseState(pause);
    }, [pause])

    useEffect(() => {
        setContent({pause: pauseState})
    }, [pauseState])

    useEffect(() => {
        setContent({
            from: { width: 0 },
            to: { width: activeState ? elWidth : 0 },
            onRest: () => {
                activeStateRef.current && nextHandler(index);
                setActiveState(false);
            },
            pause: pauseStateRef.current,
            config: {
                duration: 7200
            }
        })
    }, [activeState, elWidth])


    return (

        <li className={`accordion__container ${(activeState) && 'accordion__container--active'}`}>
            {/* Passing our indexed project that was click + 1 to set our carousel which starts at 1 rather than 0 */}
            <div {...bind} className="accordion__head" onClick={() => clickHandler(index)}>
                <div className="accordion__content">
                    <h2>{data.title}</h2>
                    <span className={`accordion__icon ${(activeState) && 'accordion__icon--active'}`}></span>
                </div>
                {activeState &&
                    <a.span
                        className="accordion__progress"
                        style={{ ...contentProps }}
                    >
                        <span className="accordion__progress-indicator"></span>
                    </a.span>
                }
            </div>
        </li>
    );
}

export default ProjectItem;