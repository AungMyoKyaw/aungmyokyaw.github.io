import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import ProfessionalHighlights from '../components/ProfessionalHighlights';
import Heading from '@theme/Heading';
import { ArrowRight } from 'lucide-react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Column: Text and Buttons */}
          <div className={styles.heroText}>
            <Heading
              as="h1"
              className={styles.heroTitle + ' margin-bottom--sm'}
            >
              {siteConfig.title}
            </Heading>
            <div
              className="margin-bottom--sm"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.7em',
                flexWrap: 'wrap'
              }}
            >
              <span className={styles.heroSubtitle} style={{ marginBottom: 0 }}>
                Software Engineer
              </span>
              <span
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 700,
                  fontSize: '1.3em',
                  userSelect: 'none'
                }}
              >
                |
              </span>
              <span className={styles.heroSubtitle} style={{ marginBottom: 0 }}>
                Solution Architect
              </span>
              <span
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 700,
                  fontSize: '1.3em',
                  userSelect: 'none'
                }}
              >
                |
              </span>
              <span className={styles.heroSubtitle} style={{ marginBottom: 0 }}>
                DevOps Expert
              </span>
            </div>
            <p
              className={styles.heroDescription + ' margin-bottom--md'}
              style={{ marginTop: 0 }}
            >
              Passionate IT professional specializing in solution architecture,
              DevOps, and full-stack development. I design scalable, efficient
              systems and drive end-to-end development with Agile practices and
              robust CI/CD pipelines.
            </p>
            <div className={styles.heroButtons} style={{ marginBottom: 0 }}>
              <Link
                className="button button--primary button--lg margin-right--md"
                to="/docs/intro"
                style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}
              >
                Explore Knowledge Base{' '}
                <ArrowRight size={20} style={{ marginLeft: 4 }} />
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/blog"
                style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}
              >
                Read Blog <ArrowRight size={20} style={{ marginLeft: 4 }} />
              </Link>
            </div>
          </div>
          {/* Right Column: Profile Image */}
          <div className={styles.heroImage}>
            <img
              src="https://avatars.githubusercontent.com/u/9404824?v=4"
              alt="Aung Myo Kyaw"
              className={styles.profileImage + ' shadow--md'}
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
