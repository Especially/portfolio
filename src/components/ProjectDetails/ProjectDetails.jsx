import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import projectData from '../../data/projects';
import StackItem from '../StackItem/StackItem';
import Timestamp from '../Timestamp/Timestamp';
import { DetailsSection, Desc, ExternalLink, Figure, Icon, Image, ImagePreview, ImageViewer, Info, InfoContain, InfoLabel, InfoText, Overlay, ProjectDesc, ProjectsNavIcon, ProjectsNavText, ProjectsLink, ProjectsNav, OverlayContainer, Preview, ProjectInfo, ProjectTitle, ProjectTitleLinks, ProjectTitleText, Stack, Video } from './projectDetails';


const ProjectDetails = ({ match }) => {
    const [projectInfo, setProjectInfo] = useState(null);
    const [overlayDisplay, setOverlayDisplay] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [prevProj, setPrevProj] = useState(null);
    const [nextProj, setNextProj] = useState(null);

    useEffect(() => {
        getProject(match.params.id);
    }, [match])

    const getProject = (id) => {
        let data = projectData.filter(item => item.id === id)[0];
        let index = projectData.findIndex((item) => item.id === id);
        let prev = (index - 1 !== -1) ? projectData[index - 1] : null;
        let next = (index + 1 !== projectData.length) ? projectData[index + 1] : null;
        prev ? setPrevProj({ id: prev.id, title: prev.title }) : setPrevProj(null);
        next ? setNextProj({ id: next.id, title: next.title }) : setNextProj(null);
        (data) && setProjectInfo(data);
    }

    const viewImage = (data) => {
        setOverlayDisplay(true);
        setCurrentImage(data);
    }

    const overlayHandle = () => {
        setOverlayDisplay(!overlayDisplay);
        (overlayDisplay === true) && setCurrentImage(null);
    }
    return (
        <>
            {projectInfo &&

                <DetailsSection>
                    {overlayDisplay &&
                        <Overlay visible={overlayDisplay} onClick={overlayHandle} >

                            <OverlayContainer>
                                <ImageViewer src={currentImage.img} alt={currentImage.alt} />
                            </OverlayContainer>

                        </Overlay>
                    }
                    <ProjectTitle>
                        <ProjectTitleText>{projectInfo.title}</ProjectTitleText>
                        <ProjectTitleLinks>
                            <ExternalLink github href={projectInfo.repo} target="_blank" rel="noopener noreferrer" title="Github"></ExternalLink>
                            {(projectInfo.link !== '') &&
                                <ExternalLink href={projectInfo.link} target="_blank" rel="noopener noreferrer"></ExternalLink>}
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
                                            type: 'span',
                                            subtype: 'int',
                                            formatOptions: { order: ['month', 'day', 'year'], leadingZeros: true, fullYear: true, separator: { all: '-' } },
                                            separator: ' to '
                                        }}
                                    />
                                </InfoText>
                            </InfoContain>

                            <InfoContain>
                                <InfoLabel>Status: </InfoLabel>
                                <InfoText>{(projectInfo.status === 0) ? 'Under Construction' : 'Completed'}</InfoText>
                            </InfoContain>
                        </Info>

                        <Info>
                            <Icon url={projectInfo.icon} />
                        </Info>

                    </ProjectInfo>



                    <Figure>
                        {projectInfo.video ?
                            <Video poster={projectInfo.image[0].img} controls>
                                <source src={projectInfo.video} type="video/mp4" />
                            </Video>
                            :
                            <Image src={projectInfo.image[0].img} alt={projectInfo.image[0].alt} onClick={() => viewImage({ img: projectInfo.image[0].img, alt: projectInfo.image[0].alt })} />
                        }
                    </Figure>

                    <ProjectDesc>
                        {projectInfo.details.map((paragraph, i) => {
                            let images = projectInfo.image.filter(image => image.index === i);
                            images = images.map((image) => {
                                return <ImagePreview key={uuid()} url={image.img} onClick={() => viewImage({ img: image.img, alt: image.alt })} />
                            })
                            return <><Desc key={uuid()}>{paragraph}</Desc><Preview>{images}</Preview></>;
                        })}
                    </ProjectDesc>

                    <Stack>
                        {projectInfo.stack.map((item) => <StackItem key={uuid()} type={item} active='true' />)}
                    </Stack>

                    <InfoContain>
                        <InfoLabel>Links: </InfoLabel>
                        <InfoText>
                            <ExternalLink github href={projectInfo.repo} target="_blank" rel="noopener noreferrer" title="GitHub"></ExternalLink>
                            {(projectInfo.link !== '') &&
                                <ExternalLink href={projectInfo.link} target="_blank" rel="noopener noreferrer" title="External Link"></ExternalLink>}
                        </InfoText>
                    </InfoContain>

                    <ProjectsNav prev={prevProj && true} next={nextProj && true}>
                        {prevProj &&
                            <ProjectsLink to={`/project/${prevProj.id}`}>
                                <ProjectsNavIcon className='prev' prev/>
                                <ProjectsNavText>{prevProj.title}</ProjectsNavText>
                            </ProjectsLink>
                            }
                        {nextProj &&
                            <ProjectsLink to={`/project/${nextProj.id}`}>
                                <ProjectsNavText next>
                                    {nextProj.title}
                                </ProjectsNavText>
                                <ProjectsNavIcon  className='next' next/>
                            </ProjectsLink>
                            }
                    </ProjectsNav>
                </DetailsSection>
            }
        </>
    )
}

export default ProjectDetails;