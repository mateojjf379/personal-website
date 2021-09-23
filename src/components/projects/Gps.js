import React from 'react';
import './Projects.css';

function Gps(props){

    function buttonHandler() {
        props.onFunction("projects");
    }

    return(
        <div>
            <button onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>GPS</h1>
            </div>
            <div>
                <p>gps project</p>
            </div>  
        </div>
    )
}

export default Gps;