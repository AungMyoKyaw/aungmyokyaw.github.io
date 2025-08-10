import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  achievements: string[];
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Solution Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Designing scalable, efficient systems that meet both technical and business needs. 
        Leading teams to align requirements and drive key projects with strategic vision.
      </>
    ),
    achievements: [
      'Led e-commerce platform migration to microservices',
      'Designed cloud-based CI/CD pipelines',
      'Reduced deployment time by 80%'
    ]
  },
  {
    title: 'DevOps Excellence',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Streamlining software development processes with robust CI/CD pipelines, 
        containerization, and infrastructure automation for optimal efficiency.
      </>
    ),
    achievements: [
      'Implemented Docker & Kubernetes orchestration',
      'Automated testing and quality gates',
      'Managed scalable cloud infrastructure'
    ]
  },
  {
    title: 'Technical Leadership',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mentoring teams, enforcing coding standards, and fostering collaborative environments. 
        Driving innovation while ensuring high-quality software delivery.
      </>
    ),
    achievements: [
      'Led global teams with Agile workflows',
      'Mentored developers across multiple projects',
      'Enforced coding standards for quality delivery'
    ]
  },
];

function Feature({title, Svg, description, achievements}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.achievements}>
          <h4>Key Achievements:</h4>
          <ul className={styles.achievementsList}>
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
