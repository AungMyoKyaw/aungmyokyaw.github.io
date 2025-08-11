import type { ReactNode } from 'react';
import Heading from '@theme/Heading';

function Strength({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card shadow--lw padding--lg height--full text--center">
        <Heading as="h3" className="text--primary">
          {title}
        </Heading>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default function ProfessionalHighlights(): ReactNode {
  return (
    <section
      className="padding-vert--xl"
      style={{ background: 'var(--ifm-background-surface-color)' }}
    >
      <div className="container">
        <Heading
          as="h2"
          className="text--center text--primary margin-bottom--lg"
        >
          Key Strengths
        </Heading>
        <div className="row">
          <Strength title="Solution Architecture">
            Designing scalable, resilient, and cost-effective cloud-native
            solutions.
          </Strength>
          <Strength title="Full-Stack Development">
            Building modern, responsive, and user-friendly web applications.
          </Strength>
          <Strength title="DevOps & Automation">
            Implementing CI/CD pipelines and automating infrastructure with IaC.
          </Strength>
        </div>
        <Heading
          as="h2"
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
                  {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="badge badge--primary margin--xs"
                      >
                        {tech}
                      </span>
                    )
                  )}
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
                      className="badge badge--primary margin--xs"
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
                  {['Node.js', 'NestJS', 'Express.js', 'MongoDB', 'MySQL'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="badge badge--primary margin--xs"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
