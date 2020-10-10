import React, {useState} from 'react';
import projectData from '../../data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import ProjectCarosel from '../ProjectCarosel/ProjectCarosel';
import './projects.scss';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null); // Project ID passed here, during map (ProjectData.id === activeProject)
    const [projectsState, setProjectsState] = useState(projectData);

    const currentProject = (id) => {
        // If we're clicking on the same active project, set to null to collapse all 
        (activeProject !== id) ? setActiveProject(id) : setActiveProject(null);
    }

    let projectList = projectsState.map(project => <ProjectItem key={project.id} clickHandler={currentProject} data={project} active={project.id === activeProject} />)

    return (
        <section className="carosel">
            <h1>Projects</h1>
            {/* Projects item will determine the currently active project logic */}
            <div className="carosel__holder">
                {projectList}
                <ProjectCarosel data={projectsState} />
            </div>
            {/* Project Viewer Component which gets the data from activeProject state */}
        </section>
    )
}

export default Projects;