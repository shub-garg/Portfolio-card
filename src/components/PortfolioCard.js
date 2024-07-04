// src/PortfolioCard.js
import React from "react";
import {FaEnvelope } from "react-icons/fa";
import linkedin from "./assets/linkedin.jpg"
import fileAlt from "./assets/resume.jpg"
import github from "./assets/github.jpg"
import portfolio from "./assets/portfolio.jpg"
import "./PortfolioCard.css";
import image from "./assets/profile_image.jpeg";

const PortfolioCard = () => {
  return (
    <div className="portfolio-card">
    <div className="profile-section">
        <div className="circle-frame">
            <img src={image} alt="Shubham Garg" className="profile-pic" />
        </div>
        <h1>Shubham Garg</h1>
        <p>_________</p>
        <p> CS Major @ <a href="https://engineering.nyu.edu/">NYU Tandon</a>
        </p>
    </div>
    <div className="actions">
        <div className="item-section">
            <a href="https://www.shubhamgarg.live" target = "_blank" rel="noopener noreferrer" className="action-button">
                <img src={portfolio} alt="Portfolio" className="icon"/>{" "} <div className="action-text first">
                    <h2>Portfolio Website</h2>
                    <p>Check out my Portfolio website</p>
                </div>
            </a>
        </div>
        <hr id="divider06" className="style1 full">
        </hr>
        <div className="item-section">
            <a href="https://drive.google.com/file/d/19SpNLWpU6vdfDcOvBn3Df7zczl7HZ835/view?usp=sharing"  target = "_blank" rel="noopener noreferrer" className="action-button">
            <img src={fileAlt} alt="Resume" className="icon"/>{" "} <div className="action-text">
                    <h2>Resume</h2>
                    <p>View and download my resume</p>
                </div>
            </a>
        </div>
        <hr id="divider06" className="style1 full">
        </hr>
        <div className="item-section">
            <a href="https://www.linkedin.com/in/shubham-garg-03a848190/" target = "_blank"  rel="noopener noreferrer" className="action-button second">
            <img src={linkedin} alt="LinkedIn" className="icon"/>{" "} <div className="action-text">
                    <h2>LinkedIn</h2>
                    <p>Connect with me on LinkedIn</p>
                </div>
            </a>
        </div>
        <hr id="divider06" className="style1 full">
        </hr>
        <div className="item-section">
            <a href="https://github.com/shub-garg" target = "_blank" rel="noopener noreferrer" className="action-button">
            <img src={github} alt="Github" className="icon"/>{" "} <div className="action-text">
                    <h2>GitHub</h2>
                    <p>View and download my resume</p>
                </div>{" "}
            </a>
        </div>
        <hr id="divider06" className="style1 full">
        </hr>
        <div className="inner">
            <ul id="buttons01" className="style1 buttons">
                <li>
                    <a href="mailto:shubgarg17@gmail.com" rel="noopener noreferrer" className="button n01">
                        <FaEnvelope />{" "}
                        <span className="label">Email</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default PortfolioCard;
