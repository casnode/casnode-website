import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import BrowserWindow from '../components/BrowserWindow';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function CasnodeWindow() {
  return (
    <div className={styles.casnodewindow}>
    <div className="container text--center">
      <div className="row">
        <div className="col">
          Casnode is a forum developed by <Link href="https://github.com/casbin/casnode">Casbin community</Link> with a modern interface.
        <br />
        With supporting many third-party application login, you can choose your favorite social network to login.
        <br />
        For more details about setup of Casnode, please visit <Link to="/docs/installation">Casnode installation</Link>
        <br />
        And if your have questions, you can ask questions in <Link href="https://github.com/casbin/casdoor">our Casnode community</Link>
        </div>
        <div>
        <BrowserWindow url="https://forum.casbin.com">
        <iframe src="https://forum.casbin.com" width="850" height="500" frameborder="0"></iframe>
      </BrowserWindow>
        </div>
      </div>
    </div>
  </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Next-generation forum software`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CasnodeWindow />
      </main>
    </Layout>
  );
}
