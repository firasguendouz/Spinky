import './howItWorksSection.css';

import React from 'react';

export const HowItWorksSection = () => {
  const steps = [
    { id: 1, title: 'Create Your Unique Spinky Demon', image: '../../assets/Create.png' },
    { id: 2, title: 'Stake Your NFT', image: '../../assets/stake.png' },
    { id: 3, title: 'Claim $Ash Token', image: '../../assets/icon-purchase.png' },
    { id: 4, title: 'Buy Land Piece', image: '../../assets/icon-browse.png' },
    { id: 5, title: 'Start Playing Game', image: '../../assets/icon-browse.png' },
  ];

  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.id} className="step-item">
            <div className="icon">
              <img src={step.image} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

;
