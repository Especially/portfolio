import React, {useState, useEffect} from 'react';
import projectData from '../../data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import './projects.scss';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null); // Project ID passed here, during map (ProjectData.id === activeProject)

    const currentProject = (id) => {
        setActiveProject(id);
    }

    let projects = projectData.map(project => <ProjectItem key={project.id} clickHandler={currentProject} data={project} active={project.id === activeProject} />)

    return (
        <article className="accordion">
            <h1>Projects</h1>
            {/* For each project item map... pass active state through a map function */}
            {projects}
        </article>
    )
}

export default Projects;