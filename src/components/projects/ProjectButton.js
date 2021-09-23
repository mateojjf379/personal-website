import React from 'react';
import './Projects.css';

function ProjectButton(props){

    function buttonHandler(newState) {
        props.onFunction(newState);
    }

    const style = {
        backgroundImage: 'url(' + props.image + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeate: 'no-repeat'
    }
    
    return(
        <div>
            <button className="project-button" style={style} onClick={() => buttonHandler(props.state)}>{props.title}</button>
        </div>
    )
}

export default ProjectButton;