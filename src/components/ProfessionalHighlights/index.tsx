import type { ReactNode } from 'react';
import Heading from '@theme/Heading';

export default function ProfessionalHighlights(): ReactNode {
  return (
    <section
      className="padding-vert--xl"
      style={{ background: 'var(--ifm-background-surface-color)' }}
    >
      <div className="container">
        {/* Technology Stack Section */}
        <section className="margin-bottom--none" aria-labelledby="tech-heading">
          <Heading
            as="h2"
            id="tech-heading"
            className="text--center text--primary margin-bottom--lg"
          >
            Technology Expertise
          </Heading>
          <div className="row">
            <div className="col col--4 margin-bottom--lg">
              <div className="card shadow--lw padding--lg height--full">
                <div className="card__header">
                  <h4 className="card__title text--center text--primary">
                    Cloud & DevOps
                  </h4>
                </div>
                <div className="card__body">
                  <div className="text--center">
                    {[
                      'AWS',
                      'Docker',
                      'Kubernetes',
                      'Terraform',
                      'Jenkins'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="badge badge--outline badge--primary margin-right--sm margin-bottom--sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card shadow--lw padding--lg height--full">
                <div className="card__header">
                  <h4 className="card__title text--center text--primary">
                    Frontend Development
                  </h4>
                </div>
                <div className="card__body">
                  <div className="text--center">
                    {[
                      'React',
                      'TypeScript',
                      'Tailwind CSS',
                      'Next.js',
                      'Svelte'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="badge badge--outline badge--primary margin-right--sm margin-bottom--sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col col--4 margin-bottom--lg">
              <div className="card shadow--lw padding--lg height--full">
                <div className="card__header">
                  <h4 className="card__title text--center text--primary">
                    Backend & Databases
                  </h4>
                </div>
                <div className="card__body">
                  <div className="text--center">
                    {[
                      'Node.js',
                      'NestJS',
                      'Express.js',
                      'MongoDB',
                      'MySQL'
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="badge badge--outline badge--primary margin-right--sm margin-bottom--sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
