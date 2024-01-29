// components/Layout.jsx

import './Layout.css'; // Import the CSS file

import { AuthenticatedRoutesWrapper } from 'components/sdkDappComponents';
import { Footer } from './Footer';
import { Header } from './Header';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { RouteNamesEnum } from 'localConstants/routes';
import { routes } from 'routes/routes';
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }: PropsWithChildren) => {
  const { search } = useLocation();

  return (
    <div className='flex-container  '>
      <Header  />
      <main className='main-content'>
     

        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${RouteNamesEnum.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer  />
      
    </div>
  );
};
