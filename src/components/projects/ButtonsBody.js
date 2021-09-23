import React from 'react';
import './Projects.css';
import ProjectButton from './ProjectButton';
import image from './pictures/image.jpeg';
import drone from './pictures/drone.jpg';
import gps from './pictures/gps.jpeg';
import porsche from './pictures/porsche.png';
import stm from './pictures/stm32.jpeg';
import iot from './pictures/iot.png';


function ButtonsBody(props){

    function buttonHandler(newState) {
        props.onFunction(newState);
    }
    
    return(
        <div className="project-col-container">
            <ProjectButton image={porsche} onFunction={buttonHandler} title="Porsche 944" state='car'></ProjectButton>
            <ProjectButton image={stm} onFunction={buttonHandler} title="STM32" state='stm32'></ProjectButton>
            <ProjectButton image={drone} onFunction={buttonHandler} title="Drone" state='drone'></ProjectButton>
            <ProjectButton image={iot} onFunction={buttonHandler} title="IOT" state='iot'></ProjectButton>
            <ProjectButton image={gps} onFunction={buttonHandler} title="GPS" state='gps'></ProjectButton>
        </div>
    )
}

export default ButtonsBody;