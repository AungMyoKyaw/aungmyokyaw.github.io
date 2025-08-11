import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  level: string;
  skills: string[];
};

type ProjectItem = {
  name: string;
  description: string;
  impact: string;
  technologies: string[];
};

type AchievementItem = {
  title: string;
  description: string;
  achievements: string[];
  icon: string;
};

const keyAchievements: AchievementItem[] = [
  {
    title: 'Solution Architecture',
    description:
      'Designing scalable, efficient systems that meet both technical and business needs. Leading teams to align requirements and drive key projects with strategic vision.',
    achievements: [
      'Led e-commerce platform migration to microservices',
      'Designed cloud-based CI/CD pipelines',
      'Reduced deployment time by 80%'
    ],
    icon: '🏗️'
  },
  {
    title: 'DevOps Excellence',
    description:
      'Streamlining software development processes with robust CI/CD pipelines, containerization, and infrastructure automation for optimal efficiency.',
    achievements: [
      'Implemented Docker & Kubernetes orchestration',
      'Automated testing and quality gates',
      'Managed scalable cloud infrastructure'
    ],
    icon: '⚙️'
  },
  {
    title: 'Technical Leadership',
    description:
      'Mentoring teams, enforcing coding standards, and fostering collaborative environments. Driving innovation while ensuring high-quality software delivery.',
    achievements: [
      'Led global teams with Agile workflows',
      'Mentored developers across multiple projects',
      'Enforced coding standards for quality delivery'
    ],
    icon: '👥'
  }
];

const certifications: CertificationItem[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: '2023',
    level: 'Associate',
    skills: ['AWS', 'Cloud Architecture', 'Solution Design', 'Security']
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Coursera Specialization',
    date: '2024',
    level: 'Professional',
    skills: ['Kubernetes', 'Docker', 'Microservices', 'Container Orchestration']
  },
  {
    name: 'Meta Front-End Developer',
    issuer: 'Meta Professional Certificate',
    date: '2024',
    level: 'Professional',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'UX/UI Design']
  }
];

const keyProjects: ProjectItem[] = [
  {
    name: 'DevFolio AI',
    description:
      'Personal portfolio website generator with AI capabilities for content generation',
    impact: 'Integrated Gemini API for AI-powered cover letter generation',
    technologies: ['JavaScript', 'Tailwind CSS', 'Gemini API', 'JSON Schema']
  },
  {
    name: 'Cloud-Based CI/CD Pipeline',
    description:
      'Fully automated CI/CD pipeline for microservices-based application',
    impact: 'Reduced deployment time by 80% and increased deployment frequency',
    technologies: ['AWS CodePipeline', 'Docker', 'Jenkins', 'Terraform']
  },
  {
    name: 'Real-time Analytics Dashboard',
    description:
      'Real-time data analytics dashboard for visualizing key business metrics',
    impact: 'Handled high-volume data streams with live updates',
    technologies: ['Node.js', 'WebSocket', 'D3.js', 'MongoDB']
  }
];

function AchievementCard({
  title,
  description,
  achievements,
  icon
}: AchievementItem) {
  return (
    <article className="card shadow--lg padding--lg height--full">
      <div className="card__header">
        <h3 className="text--center text--primary margin-bottom--sm">
          <span className="margin-right--sm" style={{ fontSize: '1.5em' }}>
            {icon}
          </span>
          {title}
        </h3>
      </div>
      <div className="card__body">
        <p className="text--center margin-bottom--md">{description}</p>
        <div>
          <h4 className="text--left margin-bottom--sm">Key Achievements:</h4>
          <ul className="margin-bottom--none">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function CertificationCard({
  name,
  issuer,
  date,
  level,
  skills
}: CertificationItem) {
  return (
    <article className="card shadow--md padding--lg height--full">
      <div className="card__header">
        <div className={styles.certHeader}>
          <h4 className="card__title margin-bottom--none">{name}</h4>
          <span className="badge badge--primary">{level}</span>
        </div>
      </div>
      <div className="card__body">
        <p className="text--secondary margin-bottom--md">
          {issuer} • {date}
        </p>
        <div>
          {skills.map((skill) => (
            <span
              key={skill}
              className="badge badge--secondary margin-right--sm margin-bottom--sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ name, description, impact, technologies }: ProjectItem) {
  return (
    <article className="card shadow--md padding--lg height--full">
      <div className="card__header">
        <h4 className="card__title">
          <span className="margin-right--sm">🚀</span>
          {name}
        </h4>
      </div>
      <div className="card__body">
        <p className="text--secondary margin-bottom--md">{description}</p>
        <div className="alert alert--success margin-bottom--md">
          <strong>Impact:</strong> {impact}
        </div>
        <div>
          {technologies.map((tech) => (
            <span
              key={tech}
              className="badge badge--primary margin-right--sm margin-bottom--sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProfessionalHighlights(): ReactNode {
  return (
    <section
      className="padding-vert--xl"
      style={{ background: 'var(--ifm-background-surface-color)' }}
    >
      <div className="container">
        {/* Key Achievements Section (Data-Driven) */}
        <section
          className="margin-bottom--xl"
          aria-labelledby="achievements-heading"
        >
          <Heading
            as="h2"
            id="achievements-heading"
            className="text--center text--primary margin-bottom--lg"
          >
            Key Achievements
          </Heading>
          <div className="row">
            {keyAchievements.map((achievement) => (
              <div
                key={achievement.title}
                className="col col--4 margin-bottom--lg"
              >
                <AchievementCard {...achievement} />
              </div>
            ))}
          </div>
        </section>

        {/* Professional Certifications Section */}
        <section
          className="margin-bottom--xl"
          aria-labelledby="certifications-heading"
        >
          <Heading
            as="h2"
            id="certifications-heading"
            className="text--center text--primary margin-bottom--md"
          >
            Professional Certifications
          </Heading>
          <p
            className="text--center text--secondary margin-bottom--lg"
            style={{
              maxWidth: '600px',
              margin: '0 auto var(--ifm-spacing-vertical)'
            }}
          >
            Continuously expanding expertise through industry-recognized
            certifications
          </p>
          <div className="row">
            {certifications.map((cert) => (
              <div key={cert.name} className="col col--4 margin-bottom--lg">
                <CertificationCard {...cert} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section
          className="margin-bottom--xl"
          aria-labelledby="projects-heading"
        >
          <Heading
            as="h2"
            id="projects-heading"
            className="text--center text--primary margin-bottom--md"
          >
            Featured Projects
          </Heading>
          <p
            className="text--center text--secondary margin-bottom--lg"
            style={{
              maxWidth: '600px',
              margin: '0 auto var(--ifm-spacing-vertical)'
            }}
          >
            Delivering innovative solutions that drive business impact
          </p>
          <div className="row">
            {keyProjects.map((project) => (
              <div key={project.name} className="col col--4 margin-bottom--lg">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

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
