// Import necessary dependencies and styles

import './AboutUs.css';

import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation } from 'react-router-dom';

export   const AboutUs = () => {
  const { pathname } = useLocation();

  return (
    <div className='about-us-container'>

      {/* Main Container */}
      <div className='main-container'>

        {/* Top Section with Animated Background */}
        <div className='top-section'>
          {/* Logo */}
          <div className='logo-container'>
            <img src="src/assets/SpinkyBloodyLogo.png" alt="Logo" className="logo" />
          </div>

          {/* Title and Subtitle */}
          <div className='title-container'>
            <h2 className="title">Spinky Demonz Club</h2>
            <p className="subtitle">A Pixel Mischief in a Community-Driven Realm</p>
          </div>

          {/* Social Media Links with Hover Effects */}
          <div className='social-media-container'>
            <div className="social-media-links">
              <div className="social-media-link">
                <FontAwesomeIcon icon={faTwitter} size="sm" />
                <span className="twitter-handle">@SpinkyDemonzClub</span>
              </div>
              <div className="social-media-link">
                <FontAwesomeIcon icon={faDiscord} size="sm" />
                <span className="discord-handle">@SpinkyDemonzClub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Interactive Phases Timeline */}
        <div className='middle-section'>
          {[1, 2, 3, 4].map((phase) => (
            <div key={phase} className='phase-container'>
              <h2 className='phase-title'>Phase {phase}</h2>
              <p className="phase-info">Presale</p>
              <p className="phase-info">12.0{phase}.2024</p>
              <p className="phase-info">Supply: {phase === 3 ? '2D Map' : phase === 4 ? 'ASH Token' : phase * 1000}</p>
              <p className="phase-info">{/* Add relevant description here */}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section - Interactive Gallery */}
        <div className='bottom-section'>
          <div className='image-text-container'>
            <img src="path/to/smallImage.png" alt="Small Image" className="small-image" />
            <p className="image-description">Description for the small image</p>
          </div>
          <div className='animated-gif-container'>
            <img src="path/to/animated.gif" alt="Animated GIF" className="animated-gif" />
          </div>
        </div>
      </div>
    </div>
  );
};

;
