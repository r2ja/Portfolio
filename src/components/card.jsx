import React from 'react';
import './card.css'; // Import the CSS file for styling
import linkIcon from '../assets/link-icon.png'; // Import the link icon image

function Card({ image, title, subtitle, link }) {
    return (
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="card-content">
                <h2 className="card-title">
                    {title}
                    <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
                        <img src={linkIcon} alt="Link Icon" className="link-icon" />
                    </a>
                </h2>
                <p className="card-subtitle">{subtitle}</p>
            </div>
            <div className="card-gradient-ball"></div>
        </div>
    );
}

export default Card;
