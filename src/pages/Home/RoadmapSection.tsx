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
    { id: 1, date: 'Q1 2024', event: 'Launch Spinky Collection', description: 'Introduce the first set of unique avatars.' },
    { id: 2, date: 'Q2 2024', event: 'Community Building', description: 'Engage with the community through events and discussions.' },
    { id: 3, date: 'Q3 2024', event: 'Collaborations with Artists', description: 'Partner with renowned artists for exclusive Spinky releases.' },
    // Add more milestones as needed
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
