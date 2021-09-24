import React, { useState } from 'react';
import './Projects.css';
import ButtonsBody from './ButtonsBody';
import Car from './Car';
import Drone from './Drone';
import Gps from './Gps';
import Iot from './Iot';
import Stm from './Stm';
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
            {projectsState==="car" && <Car onFunction={projState}></Car>} 
            {projectsState==="drone" && <Drone onFunction={projState}></Drone>}
            {projectsState==="gps" && <Gps onFunction={projState}></Gps>}
            {projectsState==="iot" && <Iot onFunction={projState}></Iot>}
            {projectsState==="stm32" && <Stm onFunction={projState}></Stm>}
            {projectsState==="content-form" && <ContentForm></ContentForm>}
        </div>
    )
}

export default Projects;