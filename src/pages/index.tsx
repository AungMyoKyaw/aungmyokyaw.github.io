import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import ProfessionalHighlights from '../components/ProfessionalHighlights';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero')}>
      <div className="container">
        <div className="text--center">
          <div className="avatar avatar--vertical margin-bottom--lg">
            <img
              className="avatar__photo avatar__photo--xl"
              src="https://avatars.githubusercontent.com/u/9404824?v=4"
              srcSet="https://avatars.githubusercontent.com/u/9404824?v=4 256w, https://avatars.githubusercontent.com/u/9404824?v=4 128w"
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
              alt="Aung Myo Kyaw"
            />
          </div>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle--micro margin-top--sm">
            Practical notes on software architecture, DevOps, and full-stack
            engineering.
          </p>
          <div className="margin-top--lg">
            <Link
              className="button button--primary button--lg margin--md"
              to="/docs"
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
