import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const PortfolioLogo = () => {
    return(
        <div className="portfolio-logo">
            <Link to="/" className="logo-link">
                <img src="/images/yiken.png" alt="Logo" className="logo-image" />
                <span className="logo-text">YIKEN SPACE</span>
            </Link>
        </div>
    );
};

export default PortfolioLogo