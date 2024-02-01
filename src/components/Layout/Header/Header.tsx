// components/Header.jsx

import './Header.css'; // Import the CSS file for styles

import {
  Button,
  Toolbar,
  Typography,
} from '@mui/material';

import { MxLink } from 'components/MxLink';
import React from 'react';
import { RouteNamesEnum } from 'localConstants';
import { environment } from 'config/config.testnet';
import { logout } from 'helpers';
import { useGetIsLoggedIn } from 'hooks';

interface LogoProps {
  isLoggedIn: boolean;
  isMobile: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLoggedIn, isMobile }) => (
  <MxLink
    className='logo-container ' 
    to={isLoggedIn ? RouteNamesEnum.dashboard : isMobile ? RouteNamesEnum.aboutus : RouteNamesEnum.home}
  >
      <img
        src="/src/assets/Logo.png"
        alt="logo"
      />
    
  </MxLink>
);

interface NavigationLinksProps {
  isLoggedIn: boolean;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ isLoggedIn }) => (
  <Toolbar className='pixel-nav'> {/* Apply toolbar styles from CSS */}
     <ul>
     <li><MxLink to={RouteNamesEnum.home}>Home</MxLink></li>
     <li><MxLink to={RouteNamesEnum.aboutus}>Team</MxLink></li>
    {isLoggedIn && <MxLink to={RouteNamesEnum.generator}>Avatar Maker</MxLink>}
    </ul>
    </Toolbar>
);

interface HeaderProps {
  toggleDrawer: () => void;
  handleNavigation: (route: string) => void;
  isMobile: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleDrawer, handleNavigation, isMobile }) => {
  const isLoggedIn = useGetIsLoggedIn();

  const handleLogout = () => {
    sessionStorage.clear();
    logout(`${window.location.origin}/unlock`, undefined, false);
  };

  return (
    <header>
    <div className='pixel-header' >
  
    <Logo isLoggedIn={isLoggedIn} isMobile={isMobile} />
      {isMobile ? null : <NavigationLinks isLoggedIn={isLoggedIn} />}
      <nav className='info-section'> {/* Apply info-section styles from CSS */}
        <div className='flex gap-1 items-center'>
          <div className='w-2 h-2 rounded-full bg-green-500' />
          <p>{environment}</p>
        </div>
        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            className='disconnect-btn'
          >
            Disconnect
          </Button>
        ) : (
          <MxLink to={RouteNamesEnum.unlock} className='connect-link'>
            Connect
          </MxLink>
        )}
      </nav>
      </div>
    </header>
  );
};
