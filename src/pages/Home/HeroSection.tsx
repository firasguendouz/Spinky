import './heroSection.css';

import { MxLink } from 'components/MxLink';
import React from 'react';
import { RouteNamesEnum } from 'localConstants';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover the Spinky Universe</h1>
        <p>Engaging visuals and compelling avatars await you!</p>
        <div className="cta-buttons">
        <li><MxLink to={RouteNamesEnum.generator}>AvatarMaker</MxLink></li>

          <button>Explore Collection</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
