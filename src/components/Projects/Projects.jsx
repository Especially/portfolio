import React, { useCallback, useState } from "react";
import projectData from "../../data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import styled from "styled-components";
import DeviceSize from "../../styles/mixins/DeviceSizes";
import { Section } from "../../styles/globalStyles";

const CarouselHolder = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  margin: 3rem 0;
  color: ${({ theme }) => theme.text};
  ${({ theme }) =>
    DeviceSize.tablet(`
        flex-direction: row;
        box-shadow: 0 0 11px 1px ${theme.carouselShadow};
    `)}
`;

const CarouselMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.carouselBg};
  overflow: hidden;
  ${DeviceSize.tablet(`
        flex-direction: column;
    `)}
`;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Project index passed here, during map (ProjectData.id === activeIndex)
  const [pauseState, setPauseState] = useState(false);

  const currentIndex = useCallback(
    (i) => {
      // If we're clicking on the same active project, set to null to collapse all
      activeIndex !== i && setActiveIndex(i);
    },
    [activeIndex]
  );

  const activeViewHandler = useCallback((item) => {
    setActiveIndex(item);
  }, []);

  const nextProjectHandler = (curr) => {
    const total = projectData.length;
    // If our current + 1 is less than all projects, set active index to it, otherwise, reset to 0
    const next = curr + 1 < total ? curr + 1 : 0;
    setActiveIndex(next);
  };

  const pauseHandler = (event) => {
    setPauseState(event);
  };

  return (
    <Section>
      <h1>Projects</h1>
      {/* Projects item will determine the currently active project logic */}
      <CarouselHolder className="carousel__holder">
        <CarouselMenu className="carousel__menu">
          {projectData.map((project, i) => (
            <ProjectItem
              key={project.id}
              pause={pauseState}
              nextHandler={nextProjectHandler}
              clickHandler={currentIndex}
              data={project}
              index={i}
              active={i === activeIndex}
            />
          ))}
        </CarouselMenu>
        <ProjectCarousel
          data={projectData}
          current={activeIndex}
          clickHandler={activeViewHandler}
          pauseHandler={pauseHandler}
        />
      </CarouselHolder>
      {/* Project Viewer Component which gets the data from activeIndex state */}
    </Section>
  );
};

export default Projects;
