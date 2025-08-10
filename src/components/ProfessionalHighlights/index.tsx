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

function CertificationCard({
  name,
  issuer,
  date,
  level,
  skills
}: CertificationItem) {
  return (
    <div className={styles.certCard}>
      <div className={styles.certHeader}>
        <h4 className={styles.certName}>{name}</h4>
        <span className={styles.certLevel}>{level}</span>
      </div>
      <p className={styles.certIssuer}>
        {issuer} • {date}
      </p>
      <div className={styles.skillsTags}>
        {skills.map((skill) => (
          <span key={skill} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ name, description, impact, technologies }: ProjectItem) {
  return (
    <div className={styles.projectCard}>
      <h4 className={styles.projectName}>{name}</h4>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectImpact}>
        <strong>Impact:</strong> {impact}
      </div>
      <div className={styles.techStack}>
        {technologies.map((tech) => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProfessionalHighlights(): ReactNode {
  return (
    <section className={styles.highlights}>
      <div className="container">
        {/* Key Achievements Section (Three Columns) */}
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
            {/* Solution Architecture */}
            <div className="col col--4 margin-bottom--lg">
              <article className="card shadow--md padding--lg h-100">
                <h3 className="text--center text--primary">
                  Solution Architecture
                </h3>
                <p className="text--center">
                  Designing scalable, efficient systems that meet both technical
                  and business needs. Leading teams to align requirements and
                  drive key projects with strategic vision.
                </p>
                <div className="margin-top--md">
                  <h4 className="text--left">
                    <span
                      role="img"
                      aria-label="Trophy"
                      className="margin-right--sm"
                    >
                      🏆
                    </span>
                    Key Achievements:
                  </h4>
                  <ul>
                    <li>Led e-commerce platform migration to microservices</li>
                    <li>Designed cloud-based CI/CD pipelines</li>
                    <li>Reduced deployment time by 80%</li>
                  </ul>
                </div>
              </article>
            </div>
            {/* DevOps Excellence */}
            <div className="col col--4 margin-bottom--lg">
              <article className="card shadow--md padding--lg h-100">
                <h3 className="text--center text--primary">
                  DevOps Excellence
                </h3>
                <p className="text--center">
                  Streamlining software development processes with robust CI/CD
                  pipelines, containerization, and infrastructure automation for
                  optimal efficiency.
                </p>
                <div className="margin-top--md">
                  <h4 className="text--left">
                    <span
                      role="img"
                      aria-label="Trophy"
                      className="margin-right--sm"
                    >
                      🏆
                    </span>
                    Key Achievements:
                  </h4>
                  <ul>
                    <li>Implemented Docker &amp; Kubernetes orchestration</li>
                    <li>Automated testing and quality gates</li>
                    <li>Managed scalable cloud infrastructure</li>
                  </ul>
                </div>
              </article>
            </div>
            {/* Technical Leadership */}
            <div className="col col--4 margin-bottom--lg">
              <article className="card shadow--md padding--lg h-100">
                <h3 className="text--center text--primary">
                  Technical Leadership
                </h3>
                <p className="text--center">
                  Mentoring teams, enforcing coding standards, and fostering
                  collaborative environments. Driving innovation while ensuring
                  high-quality software delivery.
                </p>
                <div className="margin-top--md">
                  <h4 className="text--left">
                    <span
                      role="img"
                      aria-label="Trophy"
                      className="margin-right--sm"
                    >
                      🏆
                    </span>
                    Key Achievements:
                  </h4>
                  <ul>
                    <li>Led global teams with Agile workflows</li>
                    <li>Mentored developers across multiple projects</li>
                    <li>Enforced coding standards for quality delivery</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Professional Certifications Section */}
        <section
          className={styles.section}
          aria-labelledby="certifications-heading"
        >
          <Heading
            as="h2"
            id="certifications-heading"
            className={styles.sectionTitle}
          >
            Professional Certifications
          </Heading>
          <p className={styles.sectionSubtitle}>
            Continuously expanding expertise through industry-recognized
            certifications
          </p>
          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} {...cert} />
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.section} aria-labelledby="projects-heading">
          <Heading
            as="h2"
            id="projects-heading"
            className={styles.sectionTitle}
          >
            Featured Projects
          </Heading>
          <p className={styles.sectionSubtitle}>
            Delivering innovative solutions that drive business impact
          </p>
          <div className={styles.projectGrid}>
            {keyProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className={styles.section} aria-labelledby="tech-heading">
          <Heading as="h2" id="tech-heading" className={styles.sectionTitle}>
            Technology Expertise
          </Heading>
          <div className={styles.techCategories}>
            <div className={styles.techCategory}>
              <h4>Cloud & DevOps</h4>
              <div className={styles.techList}>
                <span>AWS</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>Terraform</span>
                <span>Jenkins</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h4>Frontend Development</h4>
              <div className={styles.techList}>
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Next.js</span>
                <span>Svelte</span>
              </div>
            </div>
            <div className={styles.techCategory}>
              <h4>Backend & Databases</h4>
              <div className={styles.techList}>
                <span>Node.js</span>
                <span>NestJS</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
