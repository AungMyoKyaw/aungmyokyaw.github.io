import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProfessionalHighlights from '../components/ProfessionalHighlights';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')}>
      <div className="container">
        <div className="text--center">
          <div className="avatar avatar--vertical margin-bottom--lg">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://avatars.githubusercontent.com/u/9404824?v=4"
              alt="Aung Myo Kyaw"
            />
          </div>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="margin-top--lg">
            <Link
              className="button button--secondary button--lg margin--md"
              to="/docs/intro"
            >
              Explore Knowledge Base
            </Link>
            <Link
              className="button button--secondary button--lg margin--md"
              to="/blog"
            >
              Read Blog
            </Link>
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
