import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
import BrowserWindow from "../components/BrowserWindow";
import Translate from "@docusaurus/Translate";
import CasnodeCard from "../components/CasnodeCard";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Casnode</Translate></h1>
        <br />
        <p className="hero__subtitle"><Translate>A beautiful and simple next-generation forum software based on Go and React</Translate></p>
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
        <BrowserWindow>
          <div className={styles.headeriframe}>
            <CasnodeCard int="https://forum.casbin.org" cn="https://forum.casbin.com" scrolling="yes" />
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
            <BrowserWindow>
              <div className={styles.loginiframediv}>
                <CasnodeCard width="870px" height="720px"
                  int="https://door.casdoor.com/login/oauth/authorize?client_id=014ae4bd048734ca2dea&response_type=code&redirect_uri=https%3A%2F%2Fforum.casbin.org%2Fcallback&scope=read&state=app-casnode"
                  cn="https://door.casbin.com/login/oauth/authorize?client_id=014ae4bd048734ca2dea&response_type=code&redirect_uri=https://forum.casbin.com/callback&scope=read&state=app-casbin-forum"
                />
              </div>
            </BrowserWindow>
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageContent() {
  return (
    <div className={styles.languagecontent}>
      <div className="container text--center">
        <div className="row">
          <div className={styles.languagewindow}>
            <BrowserWindow>
              <div className={styles.languageiframediv}>
                <CasnodeCard
                  int="https://forum.casbin.org/select/language"
                  cn="https://forum.casbin.com/select/language"
                />
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
  );
}

export default function Home() {
  return (
    <Layout
      title={"Casnode · A beautiful and simple next-generation forum software based on Go and React"}
      description="A beautiful and simple next-generation forum software based on Go and React">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LoginContent />
        <LanguageContent />
      </main>
    </Layout>
  );
}
