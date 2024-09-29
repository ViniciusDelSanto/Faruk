import React from 'react';
import './TeamSection.css';

const teamMembers = [
  { name: 'Vinicin Cria', role: 'Dev Full Stackerson' },
  { name: 'Pio Cria', role: 'Quality Assurenson' },
  { name: 'Paulin Crey Cria', role: 'Quality Assurenson' },
  { name: 'Rapha Cria', role: 'PMO odeio pmos' },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2>Conheça Nossa Equipe</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
