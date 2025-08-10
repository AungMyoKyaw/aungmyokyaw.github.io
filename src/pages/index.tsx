import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ProfessionalHighlights from '@site/src/components/ProfessionalHighlights';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
              Passionate IT professional specializing in solution architecture, DevOps, and full-stack development. 
              I design scalable, efficient systems and drive end-to-end development with Agile practices and robust CI/CD pipelines.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Explore Knowledge Base 📚
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/blog">
                Read Blog 📝
              </Link>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/AungMyoKyaw" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/aungmyokyaw/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="https://aungmyokyaw.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Portfolio
              </a>
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
        <div className={styles.licenseInfo}>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
              alt="Creative Commons BY-NC-SA 4.0 License"
              className={styles.licenseImage}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Software Engineer & Solution Architect`}
      description="Professional portfolio and knowledge base of Aung Myo Kyaw - Software Engineer specializing in solution architecture, DevOps, and full-stack development.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProfessionalHighlights />
      </main>
    </Layout>
  );
}
