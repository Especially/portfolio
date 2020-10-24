import React, {useState} from 'react';
import projectData from '../../data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import './projects.scss';

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
            <div className="carousel__holder">
                <ul className="carousel__menu">
                    {projectList}
                </ul>
                <ProjectCarousel data={projectData} current={activeIndex} clickHandler={activeViewHandler} pauseHandler={pauseHandler}  />
            </div>
            {/* Project Viewer Component which gets the data from activeIndex state */}
        </section>
    )
}

export default Projects;