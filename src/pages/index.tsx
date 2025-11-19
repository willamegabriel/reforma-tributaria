import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomeHero from '@site/src/components/HomeHero';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomeHero />

      <main>

        <HomepageFeatures />

        {/* Botão centralizado abaixo das features */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "60px"
          }}
        >
          <a
            href="/reforma-tributaria/intro"
            className="home-tutorial-button"
          >
            Acessar Tutorial
          </a>
        </div>

      </main>
    </Layout>
  );
}
