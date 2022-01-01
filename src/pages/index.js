import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '../components/HomepageFeatures';
import BrowserWindow from '../components/BrowserWindow';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Casnode</Translate></h1>
        <br />
        <p className="hero__subtitle"><Translate>Next-generation forum software based on Go and React</Translate></p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="/docs/overview">
            <Translate>Get Started</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="https://forum.casbin.com/">
            <Translate>Online Demo</Translate>
          </Link>
        </div>
      </div>
      <div className={styles.casnodewindow}>
      <BrowserWindow url="https://forum.casbin.com">
        <div className={styles.headeriframe}>
        <iframe className="headerwindow" src="https://forum.casbin.com" width="870px" height="450px" border="0" frameborder="0"></iframe>
        </div>
      </BrowserWindow>
      </div>
    </header>
  );
}

function LoginContent() {
  return (
    <div className={styles.logincontent}>
    <div className="container text--center">
      <div className="row">
        <div className="col">
        <Translate>Casnode is a forum developed by</Translate> <Link href="https://github.com/casbin/casnode"><Translate>Casbin community</Translate></Link> <Translate>with a modern interface.</Translate>
        <br />
        <Translate>
        With supporting many third-party application login, you can choose your favorite social network to login.
        </Translate>
        </div>
        <div className={styles.loginwindow}>
        <BrowserWindow url="https://forum.casbin.com">
        <div className={styles.loginiframediv}>
        <iframe className={styles.loginiframe} src="https://door.casbin.com/login/oauth/authorize?client_id=014ae4bd048734ca2dea&response_type=code&redirect_uri=https://forum.casbin.com/callback&scope=read&state=app-casbin-forum" width="870px" height="720px" scrolling="no" border="0" frameborder="0"></iframe>
        </div>
        </BrowserWindow>
      </div>
      </div>
    </div>
  </div>
  )
}

function LanguageContent() {
  return (
    <div className={styles.languagecontent}>
    <div className="container text--center">
      <div className="row">
      <div className={styles.languagewindow}>
        <BrowserWindow url="https://forum.casbin.com">
          <div className={styles.languageiframediv}>
        <iframe className={styles.languageiframe} src="https://forum.casbin.com/select/language" width="870px" height="450px" scrolling="no" frameborder="0"></iframe>
        </div>
        </BrowserWindow>
        </div>
        <div className="col">
          <font size="6" color="red">
          你好 
          </font>&nbsp;<font size="6" color="grey">Hello</font>&nbsp;<font size="6" color="green">Bonjour</font><br /> <font size="6" color="blue">こんにちは</font> <font size="6" color="yellow">안녕하세요</font> <font size="6" color="purple">Hallo</font><br /><font size="6" color="orange">привет</font>
          <br />
          <Translate>
          With supporting for many languages, you can choose your language to access Casnode without barrier
          </Translate>
        </div>
      </div>
    </div>
  </div>
  )
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
        <LoginContent />
        <LanguageContent />
      </main>
    </Layout>
  );
}
