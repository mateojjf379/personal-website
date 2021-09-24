import React from 'react';
import './Projects.css';

function Drone(props){

    function buttonHandler() {
        props.onFunction("projects");
    }

    return(
        <div>
            <button className="back-button" onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>Drone</h1>
            </div>
            <div>
                <p>drone project</p>
            </div>  
        </div>
    )
}

export default Drone;