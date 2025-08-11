import type { ReactNode } from 'react';
import Heading from '@theme/Heading';

function Strength({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card shadow--md hover-shadow--lg height--full text--center">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

function TechCategory({
  title,
  technologies,
  badgeColor
}: {
  title: string;
  technologies: string[];
  badgeColor: string;
}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card shadow--md hover-shadow--lg height--full">
        <div className="card__header">
          <Heading as="h4" className="text--center">
            {title}
          </Heading>
        </div>
        <div className="card__body">
          <div className="text--center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`badge badge--${badgeColor} margin--xs`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfessionalHighlights(): ReactNode {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className="text--primary">
            Key Strengths
          </Heading>
          <p className="lead">
            A summary of my core competencies and professional skills.
          </p>
        </div>
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
        <div className="text--center margin-top--xl margin-bottom--xl">
          <Heading as="h2" className="text--primary">
            Technology Expertise
          </Heading>
          <p className="lead">
            A selection of technologies I am proficient in.
          </p>
        </div>
        <div className="row">
          <TechCategory
            title="Cloud & DevOps"
            technologies={[
              'AWS',
              'Docker',
              'Kubernetes',
              'Terraform',
              'Jenkins'
            ]}
            badgeColor="secondary"
          />
          <TechCategory
            title="Frontend Development"
            technologies={[
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Next.js',
              'Svelte'
            ]}
            badgeColor="secondary"
          />
          <TechCategory
            title="Backend & Databases"
            technologies={[
              'Node.js',
              'NestJS',
              'Express.js',
              'MongoDB',
              'MySQL'
            ]}
            badgeColor="secondary"
          />
        </div>
      </div>
    </section>
  );
}
