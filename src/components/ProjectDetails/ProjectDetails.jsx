import React, { useEffect, useState } from 'react';
import projectData from '../../data/projects';
import Timestamp from '../Timestamp/Timestamp';
import styled from 'styled-components';
import DeviceSize from '../../styles/mixins/DeviceSizes';
// import flexCenter from '../../styles/mixins/Mixins';
// import flexColumn from '../../styles/mixins/Mixins';
import { useViewer } from '../Helpers';
import StackItem from '../StackItem/StackItem';
import { v4 as uuid } from 'uuid';

const Figure = styled.figure`
    margin: 0;
    ${DeviceSize.tablet(`
    margin: 1rem 2.5rem;
    `)}
    width: 100%;
`;

const Video = styled.video`
    width: 100%;
`;

const Image = styled.img`
    width: 25rem;
    height: 100%;
    backgroud-position: center center;
    background-size: cover;
`;

const ProjectInfo = styled.div`
display: flex;
justify-content: space-between;
//width: 20rem;
`;

const InfoContain = styled.div`
display: flex;
align-items: center;
`;

const InfoLabel = styled.h3`

`;

const InfoText = styled.span`
display: flex;
`;

const Icon = styled.span`
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    display: block;
    height: 5rem;
    width: 5rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Preview = styled.div`
    display: flex;
    justify-content: center;
    //align-items: center;
`;

const ImagePreview = styled.div`
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    filter: blur(1px);
    //border-radius: 5px;
    margin: 0.5rem;
    height: 10rem;
    width: 10rem;
    cursor: pointer;
    transition: filter 0.5s ease-in-out;

    &:hover {
        position: relative;
        filter: blur(0px);
        &:before {
            content: '';
            position: absolute;
            height: 100%:
            width: 100%;
            background-color: rgba(0,0,0,0.8);
        }
    }
`;

const Overlay = styled.div`
    display: ${(props) => props.visible ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    cursor: pointer;
`;

const OverlayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    padding: 1rem;
`;

const ImageViewer = styled.img`
    max-width: 100%;
`;

const Stack = styled.div`
    display: flex;
`;

const ProjectDetails = ({ match }) => {
    // const [projectID, setProjectID] = useState(match.params.id);
    const [projectInfo, setProjectInfo] = useState(null);
    const [overlayDisplay, setOverlayDisplay] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    // const gallery = useRef();
    const [bind] = useViewer();

    useEffect(() => {
        // setProjectID(match.params.id);
        getProject(match.params.id);
        console.log(match.params.id)
    }, [match])

    // useEffect(() => {
    //     getProject(projectID);
    //     console.log(projectID)
    // }, [projectID]);

    const getProject = (id) => {
        let data = projectData.filter(item => item.id === id)[0];
        (data) && setProjectInfo(data);
    }

    const viewImage = (data) => {
        setOverlayDisplay(true);
        setCurrentImage(data);
        // Do something
    }

    const overlayHandle = () => {
        setOverlayDisplay(!overlayDisplay);
        (overlayDisplay === true) && setCurrentImage(null);
    }
    return (
        <>
            {projectInfo &&

                <section>
                    <Overlay visible={overlayDisplay} onClick={overlayHandle} >
                        {overlayDisplay &&
                            <OverlayContainer>
                                <ImageViewer src={currentImage.img} alt={currentImage.alt} />
                            </OverlayContainer>
                        }
                    </Overlay>
                    <h1>{projectInfo.title}</h1>
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
                                <InfoText>{(projectInfo.status === 0) ? 'Under Construction' :  'Completed'}</InfoText>
                            </InfoContain>
                            <InfoContain>
                                <InfoLabel>Links: </InfoLabel>
                                    <InfoText>
                                        <a href={projectInfo.repo} target="_blank" rel="noopener noreferrer">GitHub</a>|
                                        { (projectInfo.link !== '') && <a href={projectInfo.link} target="_blank" rel="noopener noreferrer">Check it Out!</a>}</InfoText>
                            </InfoContain>
                        </Info>
                        <Info>
                            <Icon url={projectInfo.icon} />
                        </Info>
                    </ProjectInfo>


                    {projectInfo.video ?
                        <Figure>
                            <Video poster={projectInfo.image[0].img} controls>
                                <source src={projectInfo.video} type="video/mp4" />
                            </Video>
                        </Figure>
                        :
                        <Image src={projectInfo.image[0].img} alt={projectInfo.image[0].alt} />
                    }

                    {/* Main image goes here, unless there's a video, centered with additional padding like an article */}
                    {/* Duration directly below image on the left */}
                    {/* Will we include another auto-play carousel? Should the video be the first item which they can play or should there be a button */}
                    {/* Thorough description goes here, with images in-between */}
                    <div {...bind}>
                        {projectInfo.details.map((paragraph, i) => {
                            let images = projectInfo.image.filter(image => image.index === i);
                            // console.log(i, images);
                            images = images.map(image => {
                                return <ImagePreview url={image.img} onClick={() => viewImage({img: image.img, alt: image.alt})} />
                                // return <img src={image.img} alt={image.alt} />
                            })
                            return <><p>{paragraph}</p><Preview>{images}</Preview></>;
                        })}
                        {console.log(bind)}
                    </div>
                    <Stack>
                    {projectInfo.stack.map((item) => <StackItem key={uuid()} type={item} active='true' />)}
                    </Stack>
                </section>
            }
        </>
    )
}

export default ProjectDetails;