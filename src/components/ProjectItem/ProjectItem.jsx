import React, { useState, useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import { useMeasure } from '../Helpers';
import {ProjectName, Icon, ProjectTitle, AccordionContainer, AccordionContent, AccordionIcon, AccordionHead, AccordionProgress, ProgressIndicator} from './s-projectItem';

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

        <AccordionContainer active={activeState}>
            {/* Passing our indexed project that was click + 1 to set our carousel which starts at 1 rather than 0 */}
            <AccordionHead {...bind} onClick={() => clickHandler(index)}>
                <AccordionContent>
                    <ProjectName>
                        <Icon img={data.icon} />
                        <ProjectTitle>{data.title}</ProjectTitle>
                    </ProjectName>
                    <AccordionIcon />
                </AccordionContent>
                {activeState &&
                    <AccordionProgress
                        style={{ ...contentProps }}
                    >
                        <ProgressIndicator/>
                    </AccordionProgress>
                }
            </AccordionHead>
        </AccordionContainer>
    );
}

export default ProjectItem;