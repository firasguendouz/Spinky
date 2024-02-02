// Import necessary dependencies and styles

import './AboutUs.css';

import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import FeaturedNFTsSection from '../Home/FeaturedNFTsSection';
import { useLocation } from 'react-router-dom';

export   const AboutUs = () => {
  const { pathname } = useLocation();

  return (
    <div className='about-us-container'>
    <FeaturedNFTsSection/>
     

        
      
    </div>
  );
};

;
