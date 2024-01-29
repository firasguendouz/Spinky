// Footer.tsx

import './Footer.css'; // Import the custom CSS file

import HeartIcon from 'assets/img/heart.svg?react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='flex'>
        <a href='/disclaimer'>Disclaimer</a>
        <a target='_blank' href='https://multiversx.com/'>
          Made with <HeartIcon className='heart-icon' /> by the Spinky team
        </a>
      </div>
    </footer>
  );
};
