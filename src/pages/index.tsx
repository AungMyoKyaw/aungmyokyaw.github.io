import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProfessionalHighlights from '../components/ProfessionalHighlights';
import Heading from '@theme/Heading';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          {/* Left Column: Text and Buttons */}
          <div className="col col--7">
            <Heading
              as="h1"
              className={clsx(styles.heroTitle, 'margin-bottom--sm')}
            >
              {siteConfig.title}
            </Heading>
            <div
              className={clsx(
                styles.heroSubtitleContainer,
                'margin-bottom--sm'
              )}
            >
              <span className={styles.heroSubtitle}>Software Engineer</span>
              <span className={styles.heroSubtitle}>Solution Architect</span>
              <span className={styles.heroSubtitle}>DevOps Expert</span>
            </div>
            <p className={clsx(styles.heroDescription, 'margin-bottom--lg')}>
              Passionate IT professional specializing in solution architecture,
              DevOps, and full-stack development. I design scalable, efficient
              systems and drive end-to-end development with Agile practices and
              robust CI/CD pipelines.
            </p>
            <div className={clsx(styles.heroButtons, 'margin-bottom--none')}>
              <Link
                className="button button--primary button--lg margin-right--md margin-bottom--sm"
                to="/docs/intro"
              >
                <span>Explore Knowledge Base</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                className="button button--secondary button--lg margin-bottom--sm"
                to="/blog"
              >
                <span>Read Blog</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          {/* Right Column: Profile Image */}
          <div className="col col--5">
            <div className={styles.heroImageContainer}>
              <img
                src="https://avatars.githubusercontent.com/u/9404824?v=4"
                alt="Aung Myo Kyaw"
                className={clsx(styles.profileImage, 'shadow--tl')}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Software Engineer & Solution Architect`}
      description="Professional portfolio and knowledge base of Aung Myo Kyaw - Software Engineer specializing in solution architecture, DevOps, and full-stack development."
    >
      <HomepageHeader />
      <main>
        <ProfessionalHighlights />
      </main>
    </Layout>
  );
}
