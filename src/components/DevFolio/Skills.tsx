import React from 'react';
import portfolioData from '@site/config/defolio.json';
import { Skill } from './types';
import Heading from '@theme/Heading';

const Skills: React.FC = () => {
  const skills = portfolioData.skills as Skill[];

  if (!skills || skills.length === 0) {
    return <p>No skills to display.</p>;
  }

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      const category = skill.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const categoryNames = {
    'programming-languages': 'Programming Languages',
    frameworks: 'Frameworks',
    libraries: 'Libraries',
    databases: 'Databases',
    tools: 'Tools',
    platforms: 'Platforms',
    methodologies: 'Methodologies',
    'soft-skills': 'Soft Skills',
    design: 'Design',
    testing: 'Testing',
    devops: 'DevOps',
    mobile: 'Mobile',
    web: 'Web',
    'data-science': 'Data Science',
    'machine-learning': 'Machine Learning',
    blockchain: 'Blockchain',
    security: 'Security',
    cloud: 'Cloud',
    other: 'Other'
  };

  return (
    <div className="container">
      <div className="row">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div className="col col--6 margin-bottom--lg" key={category}>
            <div className="card">
              <div className="card__header">
                <Heading as="h3">{categoryNames[category] || category}</Heading>
              </div>
              <div className="card__body">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {skills.map((skill) => (
                    <span key={skill.name} className="badge badge--primary">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
