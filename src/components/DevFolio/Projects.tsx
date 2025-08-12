import React from 'react';
import portfolioData from '@site/config/defolio.json';
import { Project } from './types';

const Projects: React.FC = () => {
  const projects = portfolioData.projects as Project[];

  if (!projects || projects.length === 0) {
    return <p>No projects to display.</p>;
  }

  const statusBadgeMap: Record<string, string> = {
    completed: 'badge--success',
    'in-progress': 'badge--primary',
    'on-hold': 'badge--warning',
    cancelled: 'badge--danger'
  };

  return (
    <div className="container">
      <div className="row">
        {projects.map((project, index) => (
          <div className="col col--6 margin-bottom--lg" key={index}>
            <div className="card" style={{ height: '100%' }}>
              <div className="card__header">
                <h3>{project.name}</h3>
                <div className="margin-top--sm">
                  {project.status && (
                    <span
                      className={`badge ${
                        statusBadgeMap[project.status] || 'badge--secondary'
                      } margin-right--sm`}
                    >
                      {project.status}
                    </span>
                  )}
                  {project.type && (
                    <span className="badge badge--secondary margin-right--sm">
                      {project.type}
                    </span>
                  )}
                  {project.role && (
                    <span className="badge badge--info">{project.role}</span>
                  )}
                </div>
              </div>
              <div className="card__body">
                <p>{project.description}</p>
                {project.highlights && project.highlights.length > 0 && (
                  <>
                    <h5>Highlights</h5>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <>
                    <h5 className="margin-top--md">Technologies</h5>
                    <div>
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="badge badge--secondary margin-right--sm margin-bottom--sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="card__footer">
                <div className="button-group">
                  {project.repository && (
                    <a
                      href={project.repository}
                      className="button button--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  )}
                  {(project.url || project.demo) && (
                    <a
                      href={project.url || project.demo}
                      className="button button--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
