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
        <br />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started
          </Link>
        </div>
      </div>
      <div className={styles.casnodewindow}>
      <BrowserWindow url="https://forum.casbin.com" className={styles.BrowserWindow}>
        <div className={styles.iframediv}>
        <iframe className="headerwindow" src="https://forum.casbin.com" width="870px" height="450px" border="0" frameborder="0"></iframe>
        </div>
      </BrowserWindow>
      </div>
    </header>
  );
}

function CasnodeWindow() {
  return (
    <div className={styles.casnodewindow}>
    <div className="container text--center">
        <BrowserWindow url="https://forum.casbin.com">
        <iframe src="https://forum.casbin.com" width="870" height="500" frameborder="0"></iframe>
      </BrowserWindow>
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
      </main>
    </Layout>
  );
}
