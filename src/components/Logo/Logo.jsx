import React from "react";
import Tilt from 'react-parallax-tilt';
import brainlogo from './brainlogo.png';
import './logo.css';

const Logo = () => {
    return (
        <div className="arealogo ma4 mt0">
            <Tilt>
                <div className="logo">
                    <img alt='logo' src={brainlogo} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;