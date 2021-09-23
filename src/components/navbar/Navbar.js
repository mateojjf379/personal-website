import React from 'react';
import "./Navbar.css";

function Navbar(props) {

    function buttonHandler(newState) {
       props.onFunction(newState);
    }

    return (
        <div className="navbar-container">
            <ul className="navbar">
                <li className="box"><button className="box-buttons" onClick={() => buttonHandler("home")}>Home</button></li>
                <li className="box"><button className="box-buttons" onClick={() => buttonHandler("bio")}>Bio</button></li>
                <li className="box"><button className="box-buttons" onClick={() => buttonHandler("education")}>Education</button></li>
                <li className="box"><button className="box-buttons" onClick={() => buttonHandler("professional")}>Professional</button></li>
                <li className="box"><button className="box-buttons" onClick={() => buttonHandler("projects")}>Projects</button></li>
            </ul>    
        </div>
    )
}

export default Navbar;