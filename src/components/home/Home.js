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
                <p>This website has been made to keep a record of my professional accomplishments as well as share some projects that I am currently working on. I consider myself a lifelong learner, and I am constantly trying to acquire more knowledge. As one of my professors once said, “The most marvelous invention of humanity is the computer, there have been multiple generations of scientists dreaming and working so we can have amazing technology today. This could not have been done in one lifetime, but many. And it was the constant collaboration between multiple generations of engineers that made possible such amazing technology. There is so much to be done still. Do you want to collaborate or just watch?” I know undoubtedly that I want to collaborate. Though early in my career, I hope that one day, through my constant learning and collaborative engineering efforts, I can create something that impacts the world for the better. 
                </p>
            </div>
        </div>
    )
}

export default Home;