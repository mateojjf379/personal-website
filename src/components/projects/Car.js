import React from 'react';
import './Projects.css';

function Car(props){

    function buttonHandler() {
        props.onFunction("projects");
    }

    return(
        <div>
            <button onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>Porsche 944 1984</h1>
            </div>
            <div>
                <p>car project</p>
            </div>  
        </div>
    )
}

export default Car;