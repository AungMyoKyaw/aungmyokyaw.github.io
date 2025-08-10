import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProfessionalHighlights from '@site/src/components/ProfessionalHighlights';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Passionate IT professional specializing in solution architecture,
              DevOps, and full-stack development. I design scalable, efficient
              systems and drive end-to-end development with Agile practices and
              robust CI/CD pipelines.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro"
              >
                Explore Knowledge Base 📚
              </Link>
              <Link className="button button--secondary button--lg" to="/blog">
                Read Blog 📝
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://avatars.githubusercontent.com/u/9404824?v=4"
              alt="Aung Myo Kyaw"
              className={styles.profileImage}
            />
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
        <HomepageFeatures />
        <ProfessionalHighlights />
      </main>
    </Layout>
  );
}
