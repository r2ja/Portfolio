import React from 'react';
import image from '../assets/img.jpg'; // Make sure to replace with the correct path to your image

function About() {
    return (
        <div style={{ backgroundColor: "black", color: "white", display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "5rem 10rem" }}>
            <div style={{ flex: 1, marginRight: "2rem" }}>
                <h3 style={{ margin: 0 }}>About me</h3>
            </div>
            <div style={{ flex: 2 }}>
                <p style={{ margin: 0 }}>
                    A student currently studying Computer Science from Ghulam Ishaq Khan Institute of Engineering Sciences & Technology.
                </p>
                <p style={{ margin: 0 }}>
                    I love business and tech.
                </p>
                <p style={{ margin: 0 }}>
                    Primarily working on providing Esports Solutions to foreign entities and in creating meaningful AI-Based solutions for clients across
                    the world.
                </p>
            </div>
            
        </div>
    );
}

export default About;
