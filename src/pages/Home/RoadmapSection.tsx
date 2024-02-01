import './roadmapSection.css';

import React from 'react';

interface RoadmapMilestone {
  id: number;
  date: string;
  event: string;
  description: string;
}

 const RoadmapSection: React.FC = () => {
  // Replace the following with your actual roadmap milestones
  const roadmapMilestones: RoadmapMilestone[] = [
    { id: 1, date: 'Q1 2024', event: 'Spinky Demon Creation and Minting', description: 'Introduce the first set of unique Demonz, Discover Attributes Gallery and Dashboard ' },
    { id: 2, date: 'Q2 2024', event: ' Land Purchase and Staking', description: 'World Pixel Map Release and Staking Mechanism Activation.' },
    { id: 3, date: 'Q3 2024', event: 'MMORPG Pixel Gaming Experience', description: 'Release the Spinky MMORPG World Economic Value Evaluation.' },
    { id: 4, date: 'Q3 2024', event: 'Future Innovations', description: 'Stay tuned for potential transitions to 3D gaming based on community engagement.' },
   
  ];
 

  return (
    <section className="roadmap-section">
      <h2>Roadmap</h2>
      <div className="roadmap-timeline">
        {roadmapMilestones.map((milestone) => (
          <div key={milestone.id} className="milestone-item">
            <div className="timeline-dot"></div>
            <div className="date">{milestone.date}</div>
            <div className="event">{milestone.event}</div>
            <p>{milestone.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default RoadmapSection;
