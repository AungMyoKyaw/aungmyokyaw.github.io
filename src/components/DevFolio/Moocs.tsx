import React from 'react';
import portfolioData from '@site/config/defolio.json';
import { Mooc } from './types';

const Moocs: React.FC = () => {
  const moocs = portfolioData.moocs as Mooc[];

  if (!moocs || moocs.length === 0) {
    return <p>No MOOCs to display.</p>;
  }

  return (
    <div className="container">
      {moocs.map((mooc, index) => (
        <div className="card margin-bottom--lg" key={index}>
          <div className="card__header">
            <div className="row" style={{ alignItems: 'center' }}>
              <div className="col col--10">
                <h3 style={{ marginBottom: 0 }}>{mooc.courseTitle}</h3>
              </div>
              <div className="col col--2 text--right">
                <span
                  className={`badge ${
                    mooc.status === 'Completed'
                      ? 'badge--success'
                      : 'badge--warning'
                  }`}
                >
                  {mooc.status}
                </span>
              </div>
            </div>
          </div>
          <div className="card__body">
            <p className="text--sm" style={{ marginBottom: '1rem' }}>
              {mooc.provider && (
                <span>
                  Issued by <strong>{mooc.provider}</strong>
                </span>
              )}
              {mooc.completionDate && (
                <span className="margin-horiz--sm">
                  • Completed on {mooc.completionDate}
                </span>
              )}
              {mooc.duration && <span>• {mooc.duration} hours</span>}
            </p>

            {mooc.skills && mooc.skills.length > 0 && (
              <div className="margin-bottom--md">
                <h5>Skills Gained</h5>
                <div>
                  {mooc.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="badge badge--primary margin-right--sm margin-bottom--sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {mooc.courses && mooc.courses.length > 0 && (
              <div className="margin-top--md">
                <h5>Courses in this {mooc.type}</h5>
                <ul>
                  {mooc.courses.map((course, i) => (
                    <li key={i}>
                      {course.certificateLink ? (
                        <a
                          href={course.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {course.title}
                        </a>
                      ) : (
                        course.title
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {mooc.certificateLink && (
            <div className="card__footer">
              <a
                href={mooc.certificateLink}
                className="button button--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Moocs;
