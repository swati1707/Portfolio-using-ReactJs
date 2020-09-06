import React from 'react';

import './SideNav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="./avatar-img2.png"
                className="avatar"
                alt="avatar"
                
            />
            <h2 className="main-name">Swati Wuppuluri</h2>
            {/* <p className="subtitle">"A Cadet Who Codes"</p> */}
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};