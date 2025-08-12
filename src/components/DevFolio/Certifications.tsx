import React from 'react';
import portfolioData from '@site/config/defolio.json';
import { Certification } from './types';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

const Certifications: React.FC = () => {
  const certifications = portfolioData.certifications as Certification[];

  if (!certifications || certifications.length === 0) {
    return <p>No certifications to display.</p>;
  }

  const levelBadgeMap: Record<string, string> = {
    foundation: 'badge--secondary',
    associate: 'badge--primary',
    professional: 'badge--success',
    expert: 'badge--warning',
    master: 'badge--danger'
  };

  return (
    <div className="container">
      <div className="row">
        {certifications.map((cert, index) => (
          <div className="col col--6 margin-bottom--lg" key={index}>
            <div className="card" style={{ height: '100%' }}>
              <div className="card__header">
                <Heading as="h3" style={{ marginBottom: 0 }}>
                  {cert.name}
                </Heading>
              </div>
              <div className="card__body">
                <p className="text--sm" style={{ marginBottom: '1rem' }}>
                  Issued by <strong>{cert.issuer}</strong>
                  {cert.date && ` on ${cert.date}`}
                </p>

                {cert.level && (
                  <span
                    className={`badge ${
                      levelBadgeMap[cert.level] || 'badge--info'
                    } margin-right--sm`}
                  >
                    {cert.level}
                  </span>
                )}

                {cert.description && (
                  <p className="margin-top--md">{cert.description}</p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="margin-top--md">
                    <Heading as="h5">Skills Validated</Heading>
                    <div>
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge badge--secondary margin-right--sm margin-bottom--sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="card__footer">
                <div className="button-group">
                  {cert.url && (
                    <Link href={cert.url} className="button button--primary">
                      Verify
                    </Link>
                  )}
                  {cert.badgeUrl && (
                    <Link
                      href={cert.badgeUrl}
                      className="button button--secondary"
                    >
                      View Badge
                    </Link>
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

export default Certifications;
