import React from 'react';
import './Projects.css';

function ProjectButton(props){

    function buttonHandler(newState) {
        props.onFunction(newState);
    }

    let cssProperties = {}
    cssProperties['--image'] = 'url(' + props.image + ')';
    
    return(
        <div>
            <button className="project-button" style={cssProperties} onClick={() => buttonHandler(props.state)}>{props.title}</button>
        </div>
    )
}

export default ProjectButton;