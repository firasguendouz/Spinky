import './PixelArtSection.css'; // Assuming you have a separate CSS file for styles

import React from 'react';

export  const PixelArtSection: React.FC = () => {
  return (
    <div className='pixel-art-section'>
      
      
      <div className="interactive-icons">
        {/* Icons that would represent interactive elements or game stats */}
        <div className="icon">
          <img src="/path-to-icon-image.png" alt="Icon Description" />
          <span>Icon Label</span>
        </div>
        {/* Repeat for each icon */}
      </div>
    </div>
  );
}

;
