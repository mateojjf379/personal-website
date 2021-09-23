import React from 'react';
import './Prof.css';

function Prof(){
    return(
        <div>
            <div>
                <h1 className="prof-main-title">Professional</h1>
            </div>
            <div className="prof-col-container">
                <h2 className="prof-title-in-container">Capital One - Backend Developer - March 2021</h2>
                <p>TThis position is part of the EDML (Enterprise Data and Machine Learning) organization. 
                    In EDML, we are looking for ways to innovate and create new software that will help improve other  teams’ productivity, as well as build machine learning algorithms for a wide range of uses such as cybersecurity, data analysis and different kinds of predictions. Currently, Capital One is investing a lot of effort into Snowflake integration, as explained by the lead engineer of my current position: Salim Syed (<a href="https://www.youtube.com/watch?v=JgIqE_Ix9UY">video</a>). I am part of this effort, developing a new project that consists of creating a new application that deals with the creation and management of data warehouses in Snowflake. We started from zero, in fact; there was not even one service running, so it can be said that we put the first foundational stones. Part of this initial work and my current responsibilities include:
                </p>
                <ul>
                    <li>Create and maintain fully functional microservices in Java, using the Spring Boot framework. I have developed two microservices so far, and I am in charge of building new tools in four different services.</li>
                    <li>Research and teach the team about current technologies to be implemented in our new services. I personally did all of the research for gRPC communications among microservices, built the first two gRPC services as examples, and made a demo for over 30 engineers. We are currently using this technology, and I am still a source of information whenever we want to use a new feature or debug any service.</li>
                    <li>Participate in product design decisions. We have daily meetings with all of the engineers where we discuss features and technologies that we can use to improve our work.
                    </li>
                    <li>Create and maintain a robust gRPC infrastructure. We are constantly modifying and improving our gRPC communications.</li>
                    <li>Create and maintain DynamoDB databases to be used by our microservices.</li>
                    <li>Proper integration and testing using JUnit tests and Postman.</li>
                </ul>
            </div>
            <div className="prof-col-container">
                <h2 className="prof-title-in-container">Capital One - DevOps - SRE Engineer - March 2020 to March 2021</h2>
                <p>This is a Devops-SRE engineering position in the commercial realm of Capital One. On this team, we were in charge of deploying, maintaining and automating multiple services that are powered by AWS. The main application is <a href="https://mycard.capitalone.com/">myCard</a>, which contains critical functions for corporate cards that multiple companies use. I was mainly in charge of automating our AWS reporting systems using Python scripts. Since we had over seventy different processes running all the time, we needed automation tools to gather and analyze data, then make readable reports on a daily basis. Also I was in charge of periodic rehydrations and deployments to our production environment. This list summarizes my accomplishments in this position:
                </p>
                <ul>
                    <li>Developed several programs in Python to check the difference in versions between deployed services in our production environment versus the latest committed code. This tool gave us information about how old different services were since their last deployment. We fixed several security issues using this script.</li>
                    <li>Developed and deployed health-check scripts that analyzed real time data from our AWS clusters. Generally it was very time consuming to check every cluster and every service after a deployment late at night. But running this script made things way easier because we would get a nice readable report on all of the clusters.</li>
                </ul>
            </div>
            <div className="prof-col-container">
                <h2 className="prof-title-in-container">Boeing - Defense Department - Summer 2019</h2>
                <p>My team worked on the communication systems of the Boeing T-X training jet. Our tasks were related to the networking between the training plane and a ground base, also we had to simulate other fighter jets only seen in the pilot’s radar. All the coding was done in C++, Python and Lua. At the end of my internship I received a job offer, but I turned it down because of the location. Among my accomplishments at Boeing:</p>
                <ul>
                    <li>
                    Built multiple tools in C++ that were directly deployed into the plane’s console. These tools were mainly for gathering information from the plane and sending it to the ground base.
                    </li>
                    <li>Built multiple UDP message parsers in Wireshark using Lua. I started this initiative because I saw how much time was being wasted by the engineers trying to read UDP messages in raw hexadecimal. After I finished the parsers, everybody used them and were very thankful about that.</li>
                    <li>Created an innovative testing algorithm in Python. I built a program that gathered and recorded UDP messages passed from the training jet to the ground base, and then I would replay these messages simulating an active pilot to test all our communication services and algorithms in the ground station. The idea was to make a pilot use all the weapons and flying tactics, then record this data, and then reproduce it whenever we want our systems tested. Also the recorded messages could be sent way faster, so the testing could be done in a fraction of the time that the pilot took to record the UDP messages. The testing program was continued when I left my internship.</li>
                </ul>
            </div>
        </div>
    )
}

export default Prof;