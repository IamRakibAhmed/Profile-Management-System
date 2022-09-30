import React, { useState, useRef }  from 'react';
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function Home() {
    const constraintsRef_01 = useRef(null);
    const constraintsRef_02 = useRef(null);
    const constraintsRef_03 = useRef(null);
    const constraintsRef_04 = useRef(null);
    const constraintsRef_05 = useRef(null);
    const constraintsRef_06 = useRef(null);

    return (
        <div>
            <div className="Page Welcome" id="fragment-home">
                <div className="Welcome-Text">
                    <h1 className="welcome-hi">Hi</h1>
                    <h1 className="welcome-team">We are, Team Radical</h1>
                    <h1 className="welcome-desc">Six students from CSE and BBA, are part of this team. You are welcome to checkout our portfolio, we do come up with some radical ideas.</h1>
                </div>
                <div className="Welcome-Image">
                    
                </div>
            </div>
            <div className="Page Members" id="fragment-members">
                <div className="Members-Text">
                    <h1 className="Members-Text-title">Members</h1>
                    <h1 className="Members-Text-desc">Here's our team members. Hover and Click to checkout their portfolios.</h1>
                </div>
                <div className="Members-Collection">
                    <div className="Members-row mr01">
                        <div className="Members-col m01">
                            <a href="http://localhost:8082/Rakib_Ahmed">
                                <motion.div 
                                    className="member-images mimg01"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <h5 className="Members-name">Rakib Ahmed</h5>
                            <p className="Members-dept">CSE</p>
                        </div>
                        <div className="Members-col m02">
                            <a href="http://localhost:8082/Shahrier">
                                <motion.div 
                                    className="member-images mimg02"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <h5 className="Members-name">Hasan Shahrier</h5>
                            <p className="Members-dept">CSE</p>
                        </div>
                        <div className="Members-col m03">
                            <a href="http://localhost:8082/Kaniz_Fatema_Antora">
                                <motion.div 
                                    className="member-images mimg03"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <h5 className="Members-name">Kaniz Fatema Antora</h5>
                            <p className="Members-dept">CSE</p>
                        </div>
                    </div>
                    <div className="Members-row mr02">
                        <div className="Members-col m04">
                            <a href="http://localhost:8082/Nishat_Tabassum_Mimi">
                                <motion.div 
                                    className="member-images mimg04"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <h5 className="Members-name">Nishat Tabassum Mimi</h5>
                            <p className="Members-dept">BBA</p>
                        </div>
                        <div className="Members-col m05">
                            <a href="http://localhost:8082/Kamrul_Hasan">
                                <motion.div 
                                    className="member-images mimg05"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <h5 className="Members-name">Md. Kamrul Hasan</h5>
                            <p className="Members-dept">CSE</p>
                        </div>
                        <div className="Members-col m06">
                            <a href="http://localhost:8082/Suraya_Binte_Khurshid">
                                <motion.div 
                                    className="member-images mimg06"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <h5 className="Members-name">Suraya Binte Khurshid</h5>
                            <p className="Members-dept">CSE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Page Projects" id="fragment-projects">
                <div className="Projects-Text">
                    <h1 className="Projects-Text-title">Projects</h1>
                    <h1 className="Projects-Text-desc">Here's some of our past projects. Grab and Drag to see some details.</h1>
                </div>
                <div className="Projects-Collection">
                <div className="Projects-row pr01">
                        <div className="Projects-col p01">
                            <div className="drag-container-01">
                                <motion.div className="drag-area-01" ref={constraintsRef_01}>
                                    <h1 className="project-text-title">Graplex</h1>
                                    <p className="project-text-desc">Graplex is a Search Engine Concept that can rank the webpages by depending on the strongly connected webpages.</p>
                                </motion.div>
                                <motion.div drag dragConstraints={constraintsRef_01} />
                            </div>
                        </div>
                        <div className="Projects-col p02">
                            <div className="drag-container-02">
                                <motion.div className="drag-area-02" ref={constraintsRef_02}>
                                    <h1 className="project-text-title">Chess</h1>
                                    <p className="project-text-desc">CSE 103, CSE 104 Project. A naive approach to implement the game of Chess for Windows Command Prompt..</p>
                                </motion.div>
                                <motion.div drag dragConstraints={constraintsRef_02} />
                            </div>
                        </div>
                        <div className="Projects-col p03">
                            <div className="drag-container-03">
                                <motion.div className="drag-area-03" ref={constraintsRef_03}>
                                    <h1 className="project-text-title">AWRS</h1>
                                    <p className="project-text-desc">The system refills 80 percent of a water tank avoiding water wastage. Besides that, its feature allows refilling water tanks without direct human activity.</p>
                                </motion.div>
                                <motion.div drag dragConstraints={constraintsRef_03} />
                            </div>
                        </div>
                    </div>
                    <div className="Projects-row pr02">
                        <div className="Projects-col p04">
                            <div className="drag-container-04">
                                <motion.div className="drag-area-04" ref={constraintsRef_04}>
                                    <h1 className="project-text-title">Everest Spices</h1>
                                    <p className="project-text-desc">BUS 306 assignment. Small research on Everest Spices which is the number 1 spice brand of India.</p>
                                </motion.div>
                                <motion.div drag dragConstraints={constraintsRef_04} />
                            </div>
                        </div>
                        <div className="Projects-col p05">
                            <div className="drag-container-05">
                                <motion.div className="drag-area-05" ref={constraintsRef_05}>
                                    <h1 className="project-text-title">Street Lights</h1>
                                    <p className="project-text-desc">ETE 204 project on implementation of a Street Lighting System.</p>
                                </motion.div>
                                <motion.div drag dragConstraints={constraintsRef_05} />
                            </div>
                        </div>
                        <div className="Projects-col p06">
                            <div className="drag-container-06">
                                <motion.div className="drag-area-06" ref={constraintsRef_06}>
                                    <h1 className="project-text-title">OSMonitor</h1>
                                    <p className="project-text-desc">CSE 204, CSE 212 Project. A hardware resource monitor, done in C# and WPF.</p>
                                </motion.div>
                                <motion.div drag dragConstraints={constraintsRef_06} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Page Contact" id="fragment-contact">
                <div className="Contact-Text">
                    <div className="contact-col1">
                    
                    </div>
                    <div className="contact-col2">
                        <h1 className="contact-title">Get in Touch</h1>
                        <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.9073887031867!2d90.3496990457609!3d23.760586067616444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf7ec0000001%3A0x6050bc5e60aa3014!2sUniversity%20of%20Liberal%20Arts%20Bangladesh%20(ULAB)!5e0!3m2!1sen!2sbd!4v1631600974554!5m2!1sen!2sbd" width="600" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                        <div className="contact-social">
                            <a href="https://www.facebook.com/IamRakibAhmed/" target="_blank">
                                <motion.div 
                                    className="contact-icons contact-facebook"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <a href="https://twitter.com/RealRakibAhmed" target="_blank">
                                <motion.div 
                                    className="contact-icons contact-twitter"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <a href="https://www.instagram.com/iamrakibahmed/" target="_blank">
                                <motion.div 
                                    className="contact-icons contact-instagram"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/iamrakibahmed/" target="_blank">
                                <motion.div 
                                    className="contact-icons contact-linkedin"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                            <a href="mailto:rakib.ahmed.cse@ulab.edu.bd" target="_blank">
                                <motion.div 
                                    className="contact-icons contact-email"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            </a>
                        </div>
                        <div className="contact-others">
                            <p className="contact-others-text">+8801633311471 | +8801311933625</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;