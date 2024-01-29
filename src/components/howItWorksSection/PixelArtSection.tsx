import './PixelArtSection.css'; // Assuming you have a separate CSS file for styles

import React from 'react';

export  const PixelArtSection: React.FC = () => {
  return (
    <div className='pixel-art-section'>
      <div className="castle-area">
        {/* Placeholder for castle pixel art */}
        <img src="/path-to-castle-image.png" alt="Pixel Art Castle" />
      </div>
      <div className="flame-demons">
        {/* Placeholder for flame and demons pixel art */}
        <img src="/path-to-flame-demon-image.png" alt="Pixel Art Flame and Demons" />
      </div>
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
