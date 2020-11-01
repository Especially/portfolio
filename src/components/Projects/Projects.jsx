import React, {useState} from 'react';
import projectData from '../../data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import './projects.scss';
import styled from 'styled-components';
import DeviceSize from '../../styles/mixins/DeviceSizes';

const CarouselHolder = styled.div`
    flex-direction: column;
    ${DeviceSize.tablet(`
        flex-direction: row;
    `)}
`;

const CarouselMenu = styled.ul`
    display: flex;
    ${DeviceSize.tablet(`
        flex-direction: column;
    `)}
`;

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Project index passed here, during map (ProjectData.id === activeIndex)
    const [pauseState, setPauseState] = useState(false);

    const currentIndex = (i) => {
        // If we're clicking on the same active project, set to null to collapse all 
        (activeIndex !== i) && setActiveIndex(i);
    }
    
    const activeViewHandler = (item) => {
        setActiveIndex(item);
    }

    const nextProjectHandler = (curr) => {
        let total= projectData.length;
        // If our current + 1 is less than all projects, set active index to it, otherwise, reset to 0
        let next = (curr + 1 < total) ? curr + 1 : 0;
        setActiveIndex(next);
    }

    const pauseHandler = (event) => {
        setPauseState(event)
    }

    let projectList = projectData.map((project, i) => <ProjectItem key={project.id} pause={pauseState} nextHandler={nextProjectHandler} clickHandler={currentIndex} data={project} index={i} active={i === activeIndex} />)

    return (
        <section className="carousel">
            <h1>Projects</h1>
            {/* Projects item will determine the currently active project logic */}
            <CarouselHolder className="carousel__holder">
                <CarouselMenu className="carousel__menu">
                    {projectList}
                </CarouselMenu>
                <ProjectCarousel data={projectData} current={activeIndex} clickHandler={activeViewHandler} pauseHandler={pauseHandler}  />
            </CarouselHolder>
            {/* Project Viewer Component which gets the data from activeIndex state */}
        </section>
    )
}

export default Projects;