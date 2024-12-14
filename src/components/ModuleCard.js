import React from 'react';
import { NavLink } from 'react-router-dom';
import './ModuleCard.css';

const ModuleCard = ({ courseCode, courseName, description, category, route = "/module-review" }) => {
    return (
        <div className="module-card-container">
            <div className="module-card-content">
                <div className="module-card-header">
                    <span className="course-code">{courseCode}</span>
                    <h3 className="course-name">{courseName}</h3>
                </div>
                <p className="course-description">{description}</p>
            </div>
            <NavLink to={route} className="module-card-link">
                <button className="module-card-button">
                    <span>Learn More</span>
                </button>
            </NavLink>
        </div>
    );
};

export default ModuleCard;

//all cs math cc/fc