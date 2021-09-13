import React from 'react';
import './Edu.css';

function Edu(){
    return(
        <div>
            <div>
                <h1 className="title">Education</h1>
            </div>
                <div className="left-container">
                    <div>
                        <h2>AWS Certification 2020</h2>
                        <p>I am a AWS certified solutions architect</p>
                    </div>
                    <div>
                        <h2>University of Maryland College Park</h2>
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
                                Fight Gun Violence, by Dr. Elliot Segal. I worked with Dr. Segal for one year. 
                                I was in charge of designing, building, and managing a web application and 
                                a database to collect useful information about gun violence and people who are
                                willing to contribute to the study. The application was taken down one year ago (2020)
                                after fulfilling its purpose. The application and database were powered by AWS.
                            </li>
                            <li>
                                Game Theory Applied to Construction Bids, by Dr. Allison Reilly.
                                I helped Dr. Reilly building python applications to do Bayesian analysis
                                concerning this research. The research was inconclusive when I finished.
                            </li>
                        </ul>
                        <h4>Teaching Opportunities</h4>
                        <p>Teaching Fellow for Digital Logic Desing class: I was in charge
                            of teaching material from the class one hour a week, and holding 
                            office hours to solve students questions and help them understand 
                            the material. 
                        </p>
                    </div>
                </div>
                
                <div>
                    <h2>Online Courses</h2>
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