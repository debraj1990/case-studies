import React from 'react';
import psLogo from '../../../static/images/ps-logo.png';
import './Logo.scss';

const Logo = ({ href }) => {
    if (href) {
        return (
            <a href={href} className="wwn-logo">
                <img src={psLogo} alt="Publicis Sapient" />
            </a>
        );
    }
    return (
        <div className="wwn-logo">
            <img src={psLogo} alt="Publicis Sapient" />
        </div>
    );
};

export default Logo;