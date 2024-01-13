import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import projectData from "../../data/projects";
import StackItem from "../StackItem/StackItem";
import Timestamp from "../Timestamp/Timestamp";
import {
  DetailsSection,
  Desc,
  ExternalLink,
  Figure,
  Icon,
  Image,
  ImagePreview,
  ImageViewer,
  Info,
  InfoContain,
  InfoLabel,
  InfoText,
  Overlay,
  ProjectDesc,
  ProjectsNavIcon,
  ProjectsNavText,
  ProjectsLink,
  ProjectsNav,
  OverlayContainer,
  Preview,
  ProjectInfo,
  ProjectTitle,
  ProjectTitleLinks,
  ProjectTitleText,
  Stack,
  Video,
} from "./s-projectDetails";

const ProjectDetails = () => {
  const [projectInfo, setProjectInfo] = useState(null);
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [prevProj, setPrevProj] = useState(null);
  const [nextProj, setNextProj] = useState(null);
  const params = useParams();

  useEffect(() => {
    getProject(params?.id);
  }, [params]);

  const getProject = (id) => {
    if (!id) {
      return;
    }

    let data = projectData.find(
      (item) => item.slug.toLowerCase() === id.toLowerCase()
    );

    let index = projectData.findIndex((item) => item.slug === id.toLowerCase());
    let prev = index - 1 !== -1 ? projectData[index - 1] : null;
    let next = index + 1 !== projectData.length ? projectData[index + 1] : null;

    if (prev) {
      setPrevProj({ slug: prev.slug, title: prev.title });
    } else {
      setPrevProj(null);
    }

    if (next) {
      setNextProj({ slug: next.slug, title: next.title });
    } else {
      setNextProj(null);
    }

    if (data) {
      setProjectInfo(data);
    }
  };

  const viewImage = (data) => {
    setOverlayDisplay(true);
    setCurrentImage(data);
  };

  const overlayHandle = () => {
    setOverlayDisplay(!overlayDisplay);
    overlayDisplay === true && setCurrentImage(null);
  };

  return (
    <>
      {projectInfo && (
        <DetailsSection>
          {overlayDisplay && (
            <Overlay visible={overlayDisplay} onClick={overlayHandle}>
              <OverlayContainer>
                <ImageViewer src={currentImage.img} alt={currentImage.alt} />
              </OverlayContainer>
            </Overlay>
          )}
          <ProjectTitle>
            <ProjectTitleText>{projectInfo.title}</ProjectTitleText>
            <ProjectTitleLinks>
              <ExternalLink
                github
                href={projectInfo.repo}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              ></ExternalLink>
              {projectInfo.link !== "" && (
                <ExternalLink
                  href={projectInfo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                ></ExternalLink>
              )}
            </ProjectTitleLinks>
          </ProjectTitle>

          <ProjectInfo>
            <Info>
              <InfoContain>
                <InfoLabel>Duration: </InfoLabel>
                <InfoText>
                  <Timestamp
                    start={projectInfo.start}
                    end={projectInfo.end}
                    options={{
                      type: "span",
                      subtype: "int",
                      formatOptions: {
                        order: ["month", "day", "year"],
                        leadingZeros: true,
                        fullYear: true,
                        separator: { all: "-" },
                      },
                      separator: " to ",
                    }}
                  />
                </InfoText>
              </InfoContain>

              <InfoContain>
                <InfoLabel>Status: </InfoLabel>
                <InfoText>
                  {projectInfo.status === 0
                    ? "Under Construction"
                    : "Completed"}
                </InfoText>
              </InfoContain>
            </Info>

            <Info>
              <Icon url={projectInfo.icon} />
            </Info>
          </ProjectInfo>

          <Figure>
            {projectInfo.video ? (
              <Video poster={projectInfo.image[0].img} controls>
                <source src={projectInfo.video} type="video/mp4" />
              </Video>
            ) : (
              <Image
                src={projectInfo.image[0].img}
                alt={projectInfo.image[0].alt}
                onClick={() =>
                  viewImage({
                    img: projectInfo.image[0].img,
                    alt: projectInfo.image[0].alt,
                  })
                }
              />
            )}
          </Figure>

          <ProjectDesc>
            {projectInfo.details.map((paragraph, i) => {
              let images = projectInfo.image.filter(
                (image) => image.index === i
              );
              images = images.map((image) => {
                return (
                  <ImagePreview
                    key={uuid()}
                    url={image.img}
                    onClick={() =>
                      viewImage({ img: image.img, alt: image.alt })
                    }
                  />
                );
              });
              return (
                <React.Fragment key={paragraph}>
                  <Desc>{paragraph}</Desc>
                  <Preview>{images}</Preview>
                </React.Fragment>
              );
            })}
          </ProjectDesc>

          <Stack>
            {projectInfo.stack.map((item) => (
              <StackItem key={item.id} type={item.type} active="true" />
            ))}
          </Stack>

          <InfoContain>
            <InfoLabel>Links: </InfoLabel>
            <InfoText>
              <ExternalLink
                github
                href={projectInfo.repo}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              ></ExternalLink>
              {projectInfo.link !== "" && (
                <ExternalLink
                  href={projectInfo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="External Link"
                ></ExternalLink>
              )}
            </InfoText>
          </InfoContain>

          <ProjectsNav prev={prevProj && true} next={nextProj && true}>
            {prevProj && (
              <ProjectsLink to={`/project/${prevProj.slug}`}>
                <ProjectsNavIcon className="prev" prev />
                <ProjectsNavText>{prevProj.title}</ProjectsNavText>
              </ProjectsLink>
            )}
            {nextProj && (
              <ProjectsLink to={`/project/${nextProj.slug}`}>
                <ProjectsNavText next>{nextProj.title}</ProjectsNavText>
                <ProjectsNavIcon className="next" next />
              </ProjectsLink>
            )}
          </ProjectsNav>
        </DetailsSection>
      )}
    </>
  );
};

export default ProjectDetails;
