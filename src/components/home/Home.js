import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';
import mateofabian from './mateofabian.jpeg';

function Home(){
    return(
        <div className="content">
            <div className="title">
                <h1>Mateo Jara Fabian</h1>
            </div>
            <div className="left-content">
                <img src={mateofabian} alt="mateo" className="my-image"/>
                <h3>Jorge Mateo Jara Fabian</h3>
                <p>Computer Engineer</p>
                <p>mateojjf379 at gmail dot com</p>
                <SocialIcon url="https://www.linkedin.com/in/mateofabian/"/>
                <SocialIcon url="https://github.com/mateojjf379"/>
                <SocialIcon url="https://www.facebook.com/jorgemateo.fabian"/>
                <SocialIcon url="https://twitter.com/mateojfabian"/>
            </div>
            <div className="right-content">
                <p>This website was created to publish some of my work and experience as 
                    a computer engineer, professional videographer, and father. 
                </p>
            </div>
        </div>
    )
}

export default Home;