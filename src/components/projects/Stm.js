import React from 'react';
import './Projects.css';

function Stm(props){

    function buttonHandler() {
        props.onFunction("projects");
    }

    return(
        <div>
            <button className="back-button" onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>STM</h1>
            </div>
            <div>
                <p>stm project</p>
            </div>  
        </div>
    )
}

export default Stm;