import React from 'react';
import './style.css'

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import sc01 from './img/screenshot_01.jpg';
import sc02 from './img/screenshot_02.jpg';
import sc03 from './img/screenshot_03.jpg';
import sc04 from './img/screenshot_04.jpg';
import sc05 from './img/screenshot_05.jpg';
import sc06 from './img/screenshot_06.jpg';

import pc01 from './img/photo-1553356084-58ef4a67b2a7.jpg';
import pc02 from './img/photo-1557672172-298e090bd0f1.jpg';
import pc03 from './img/photo-1576792265585-c9a7624630ca.jpg';
import pc04 from './img/photo-1588097237448-45f7aadebae1.jpg';
import pc05 from './img/photo-1595878715977-2e8f8df18ea8.jpg';

import vid01 from './vid/N7BatteryMod.mp4';

function Shahrier() {
    return (
        <div class="page">
            <div class="intro">
                <div class="profile-picture"></div>
                <h1>HASAN SHAHRIER</h1>
                <address>
                    Date of Birth: 1994-08-31<br />
                    83/1 Shukrabad, Panthapath, Dhaka<br />
                    <div className="contact-social">
                        <a href="https://www.facebook.com/h.shahrier/" target="_blank">
                            <motion.div 
                                className="contact-icons contact-facebook"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style= {{ height: "24px", width: "24px" }}
                            />
                        </a>
                        <a href="https://twitter.com/arthurs_demise" target="_blank">
                            <motion.div 
                                className="contact-icons contact-twitter"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style= {{ height: "24px", width: "24px" }}
                            />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <motion.div 
                                className="contact-icons contact-instagram"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style= {{ height: "24px", width: "24px" }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <motion.div 
                                className="contact-icons contact-linkedin"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style= {{ height: "24px", width: "24px" }}
                                />
                        </a>
                        <a href="mailto:hasan.shahrier.cse@ulab.edu.bd" target="_blank">
                            <motion.div 
                                className="contact-icons contact-email"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                style= {{ height: "24px", width: "24px" }}
                            />
                        </a>
                    </div>
                    Phone: +8801521100681
                    <br /><br /><br /><br/>
                </address>
                <p>
                    Hi! I'm Hasan Shahrier, an undergraduate student at 
                    <abbr title="University of Liberal Arts Bangladesh"> ULAB</abbr>;
                    admitted in 2018 pursuing my <abbr title="Bachelor of Science">BSc</abbr> degree in 
                    <abbr title="Computer Science and Engineering"> CSE</abbr>.<br />
                    Currently, I'm in my 9<sup>th</sup> semester hoping to complete my degree by 2022.
                </p>
            </div>
            <h2 class="inner_section">Project Showcase</h2>
            <div class="project">
                <div class="row_01">
                    <div class="project_items project_01">
                        <img class="project_sc screenshot_1" src={ sc01 } alt="Screenshot 01" />
                        <h2>Chess</h2>
                        <p>
                            CSE 103, CSE 104 Project. A naive approach to implement the game of Chess for Windows Command Prompt..
                        </p>
                    </div>
                    <div class="project_items project_02">
                        <img class="project_sc screenshot_2" src={ sc02 } alt="Screenshot 02" />
                        <h2>Tic-Tac-Toe!</h2>
                        <p>
                            CSE 412, CSE 413 Project. GUI implementation of the game Tic-Tac-Toe! using JavaFx.
                        </p>
                    </div>
                    <div class="project_items project_03">
                        <img class="project_sc screenshot_3" src={ sc03 } alt="Screenshot 03" />
                        <h2>Online Library</h2>
                        <p>
                            CSE 303, CSE 304 Project. A MySQL database for online book sharing and shopping service.
                        </p>
                    </div>
                </div>
                <div class="row_02">
                    <div class="project_items project_04">
                        <img class="project_sc screenshot_4" src={ sc04 } alt="Screenshot 04" />
                        <h2>OSMonitor</h2>
                        <p>
                            CSE 204, CSE 212 Project. A hardware resource monitor, done in C# and WPF.
                        </p>
                    </div>
                    <div class="project_items project_05">
                        <img class="project_sc screenshot_5" src={ sc05 } alt="Screenshot 05" />
                        <h2>HMS</h2>
                        <p>
                            CSE 416 Project. A Hospital Management System application, done in C# and MySQL.
                        </p>
                    </div>
                    <div class="project_items project_06">
                        <img class="project_sc screenshot_6" src={ sc06 } alt="Screenshot 06" />
                        <h2>AODV vs DSR</h2>
                        <p>
                            CSE 309, CSE 310 Project. A comparison of AODV and DSR wireless routing protocol, done in NS2.
                        </p>
                    </div>
                </div>
            </div>
            <h2 class="inner_section">Image Slideshow</h2>
            <div class="slideshow">
                <img class="picture picture_1" src={ pc01 } alt="Picture 01" />
                <img class="picture picture_2" src={ pc02 } alt="Picture 02" />
                <img class="picture picture_3" src={ pc03 } alt="Picture 03" />
                <img class="picture picture_4" src={ pc04 } alt="Picture 04" />
                <img class="picture picture_5" src={ pc05 } alt="Picture 05" />
            </div>
            <h2 class="inner_section">Android SuperUser Project Video Showcase</h2>
            <div class="videodemo">
                <video class="video_project" width="405.33" height="720" autoplay muted>
                    <source src={ vid01 } type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Shahrier;