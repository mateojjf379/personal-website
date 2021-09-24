import React from 'react';
import './Projects.css';

function Car(props){

    function buttonHandler() {
        props.onFunction("projects");
    }

    function moreContent() {
        props.onFunction("content-form");
    }

    return(
        <div>
            <button className="back-button" onClick={() => buttonHandler()}>&#60;&#60; Back</button>
            <div>
                <h1>Porsche 944 1984</h1>
            </div>
            <div>
                <p>Under development</p>
            </div>
            <div>
                <button onClick={() => moreContent()}>Add Content</button>
            </div>
        </div>
    )
}

export default Car;