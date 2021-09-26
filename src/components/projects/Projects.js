import React, { useState } from 'react';
import './Projects.css';
import ButtonsBody from './ButtonsBody';
import ContentBlog from './ContentBlog';
import ContentForm from './ContentForm';

function Projects(){

    const [projectsState, setProjectState] = useState("projects");

    function projState(newState){
        setProjectState(newState);
    }

    return(
        <div>
             <div>
                <h1 className="proj-main-title">Projects</h1>
            </div>
            {projectsState==="projects" && <ButtonsBody onFunction={projState}></ButtonsBody>}
            {projectsState==="car" && <ContentBlog onFunction={projState} name="CAR" title="Porsche 944 Blog"></ContentBlog>} 
            {projectsState==="drone" && <ContentBlog onFunction={projState} name="DRONE" title="Drone Blog"></ContentBlog>}
            {projectsState==="gps" && <ContentBlog onFunction={projState} name="GPS" title="GPS Blog"></ContentBlog>}
            {projectsState==="iot" && <ContentBlog onFunction={projState} name="IOT" title="IOT Blog"></ContentBlog>}
            {projectsState==="micro" && <ContentBlog onFunction={projState} name="MICRO" title="Microcontrollers Blog"></ContentBlog>}
            {projectsState==="content-form" && <ContentForm></ContentForm>}
        </div>
    )
}

export default Projects;