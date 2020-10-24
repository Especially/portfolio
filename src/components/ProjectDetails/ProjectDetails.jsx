import React, {useEffect, useState} from 'react';
import projectData from '../../data/projects';
import Timestamp from '../Timestamp/Timestamp';

const ProjectDetails = ({match}) => {
    const [projectID, setProjectID] = useState(match.params.id);
    const [projectInfo, setProjectInfo] = useState(null);

    useEffect(() => {
        setProjectID(match.params.id);
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

    return (
        <>
            {projectInfo && 
            
            <section>
                <h1>{projectInfo.title}</h1>
                <Timestamp 
                    start={projectInfo.start} 
                    end={projectInfo.end} 
                    options={{
                        type:'span',
                        subtype:'int',
                        formatOptions: {order:['month','day','year'],leadingZeros:true,fullYear:true,separator:{all:'-'}}, 
                        separator:' to '}}
                />
                {/* Main image goes here, unless there's a video, centered with additional padding like an article */}
                {/* Duration directly below image on the left */}
                {/* Will we include another auto-play carousel? Should the video be the first item which they can play or should there be a button */}
                {/* Thorough description goes here, with images in-between */}
            </section>
            }
        </>
    )
}

export default ProjectDetails;