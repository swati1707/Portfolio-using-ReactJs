import React from 'react';
import './SideNav.css';
import logo from './photo.jpg';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={logo}
                className="avatar"
                alt="avatar"
                
            />
            <h2 className="main-name">Swati Wuppuluri</h2>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};