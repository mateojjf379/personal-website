import React from 'react';
import './Edu.css';

function Edu(){
    return(
        <div>
            <div>
                <h1 className="edu-main-title">Education</h1>
            </div>
            <div className="edu-col-container">
                <h2 className="edu-title-in-container">University of Maryland College Park</h2>
                <h3>Computer Engineering, graduated Fall 2019</h3>
                <h4>GPA (4 scale)</h4>
                <p>3.8</p>
                <h4>Highlighted Coursework</h4>
                <ul>
                    <li>CMSC421: Intro to Artifitial Intelligence</li>
                    <li>CMSC412: Operating Systems</li>
                    <li>ENEE459B: Reverse Engineering and Hardware Security</li>
                    <li>ENEE446: Digital Computer Design</li>
                    <li>ENEE408A: Microprocessor-based Design</li>
                    <li>ENEE440: Microprocessors</li>
                    <li>ENEE324: Engineering Probability</li>
                    <li>ENEE307: Electric Circuit Design</li>
                    <li>CMSC351: Algorithms</li>
                    <li>ENEE350: Computer Organization</li>
                    <li>ENEE322: Signal and System Theory</li>
                    <li>CMSC330: Organization of Programming Languages</li>
                    <li>CMSC131/132: Object-Oriented Programming</li>
                </ul>
                <h4>Research Opportunities</h4>
                <ul>
                    <li>
                    <b>Fight Gun Violence, by Dr. Elliot Segal.</b><br></br>
                    The purpose of this research was to analyze the power that an organization, such as the NRA, has in politics. Using this data, the researchers started an initiative to form a nationwide organization for people who criticize the current gun problem in the United States. I worked with Dr. Segal for one year and I was in charge of designing, building, and managing a web application and database to collect useful information about gun violence and people willing to contribute to the study. The application was removed from the internet  one year ago (2020) after fulfilling its purpose. The application and database were powered by AWS.
                    </li>
                    <li>
                    <b>Game Theory Applied to Construction Bids, by Dr. Allison Reilly.</b><br></br>
                    The primary goal of this research was to apply game theory principles when bidding for construction jobs. I helped Dr. Reilly build python applications to do Bayesian analysis concerning this research. The research was inconclusive when I changed my major from Civil Engineering to Computer Engineering.

                    </li>
                </ul>
                <h4>Teaching Opportunities</h4>
                <ul>
                    <li>
                    <b>Teaching Fellow for Digital Logic Design - ENEE244:</b> <br></br> This class was taught by Dr. Joseph JaJa. I was in charge of teaching material from the class for one hour each week and holding office hours to solve students' questions to help them understand the material. Also I held study sessions before the tests to summarize all the covered material.
                    </li>
                    <li>
                    <b>Teaching Assistant for Introduction to Engineering - ENES100:</b><br></br> This class was taught to high school students by Dr. Peter Chang during the summer term. I was in charge of teaching part of the class and helping the students build, program and test an autonomous robot to simulate rescue missions. There were four teaching assistants, and we were in charge of demoing different microcontrollers, sensors, programming techniques, and debugging techniques. Each teaching assistant was in charge of 15 students for 4 weeks. 
                    </li>
                </ul>
            </div>
            <div className="edu-normal-container">
                <h2>Certifications</h2>
                <ul>
                    <li>AWS Solutions Architect (2020)</li>
                    <li>Spring Developer (2021)</li>
                    <li>CSSE - Certified Secure Software Engineer (2019)</li>
                </ul>
            </div>
            <div className="edu-col-container">
                <h2 className="edu-title-in-container">Online Courses</h2>
                <ul>
                    <li>Microservices with gRPC (<a href="https://www.udemy.com/course/grpc-the-complete-guide-for-java-developers/" target="_blank">link</a>)</li>
                    <li>Ethical Hacking (<a href="https://www.udemy.com/course/learn-ethical-hacking-from-scratch/" target="_blank">link</a>)</li>
                    <li>Docker Mastery (<a href="https://www.udemy.com/course/docker-mastery/" target="_blank">link</a>)</li>
                    <li>Big Data with Apache Spark and Python (<a href="https://www.udemy.com/course/taming-big-data-with-apache-spark-hands-on/" target="_blank">link</a>)</li>
                    <li>Streaming Big Data with Spark Streaming and Scala (<a href="https://www.udemy.com/course/taming-big-data-with-spark-streaming-hands-on/" target="_blank">link</a>)</li>
                    <li>Jenkins, from Zero to Hero (<a href="https://www.udemy.com/course/jenkins-from-zero-to-hero/" target="_blank">link</a>)</li>
                    <li>IoT Home Automation (<a href="https://www.udemy.com/course/iot-turn-a-light-on-with-your-iphone/" target="_blank">link</a>)</li>
                    <li>Deep Learnig and Computer Vision (<a href="https://www.udemy.com/course/computer-vision-a-z/" target="_blank">link</a>)</li>
                    <li>Android Java Masterclass (<a href="https://www.udemy.com/course/master-android-7-nougat-java-app-development-step-by-step/" target="_blank">link</a>)</li>
                    <li>React, the Complete Guide (<a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank">link</a>)</li>
                    <li>Java Spring</li>
                </ul>
            </div>
        </div>
    )
}

export default Edu;