import React from 'react';
import './Projects.css';

function Iot(props){

    function buttonHandler() {
        props.onFunction("projects");
    }

    return(
        <div>
            <button onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>IOT</h1>
            </div>
            <div>
                <p>iot project</p>
            </div>  
        </div>
    )
}

export default Iot;