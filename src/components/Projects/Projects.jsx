import React, {useState} from 'react';
import projectData from '../../data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import ProjectCarosel from '../ProjectCarosel/ProjectCarosel';
import './projects.scss';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Project index passed here, during map (ProjectData.id === activeIndex)
    const [projectsState, setProjectsState] = useState(projectData);

    const currentIndex = (i) => {
        // If we're clicking on the same active project, set to null to collapse all 
        (activeIndex !== i) && setActiveIndex(i);
        console.log('Current active project index', i)
    }
    
    const activeViewHandler = (item) => {
        setActiveIndex(item);
    }

    const nextProjectHandler = (curr) => {
        let total= projectsState.length;
        // If our current + 1 is less than all projects, set active index to it, otherwise, reset to 0
        let next = (curr + 1 < total) ? curr + 1 : 0;
        setActiveIndex(next);
    }

    let projectList = projectsState.map((project, i) => <ProjectItem key={project.id} nextHandler={nextProjectHandler} clickHandler={currentIndex} data={project} index={i} active={i === activeIndex} />)

    return (
        <section className="carosel">
            <h1>Projects</h1>
            {/* Projects item will determine the currently active project logic */}
            <div className="carosel__holder">
                <ul className="carosel__menu">
                    {projectList}
                </ul>
                <ProjectCarosel data={projectsState} current={activeIndex} clickHandler={activeViewHandler} />
            </div>
            {/* Project Viewer Component which gets the data from activeIndex state */}
        </section>
    )
}

export default Projects;