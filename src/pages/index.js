import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.scss";
import HomepageFeatures from "../components/HomepageFeatures";
import BrowserWindow from "../components/BrowserWindow";
import Translate from "@docusaurus/Translate";
import CasnodeCard from "../components/CasnodeCard";
import {useWindowSize} from "@docusaurus/theme-common";

function HomepageHeader() {
  const isMobile = useWindowSize();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Casnode</Translate></h1>
        <br />
        <p className="hero__subtitle"><Translate>Open-source forum with the look and features of Discourse, built with Go and Next.js</Translate></p>
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="/docs/introduction">
            <Translate>Get Started</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{marginTop: "2rem", marginRight: "3rem", marginLeft: "3rem"}}
            to="https://demo.casnode.com/">
            <Translate>Online Demo</Translate>
          </Link>
        </div>
      </div>
      {isMobile === "mobile" ||
        <div className={styles.casnodewindow}>
          <BrowserWindow>
            <div className={styles.headeriframe}>
              <CasnodeCard src="https://demo.casnode.com" scrolling="yes" />
            </div>
          </BrowserWindow>
        </div>
      }
    </header>
  );
}

function LoginContent() {
  const isMobile = useWindowSize();
  return (
    <div className={styles.logincontent}>
      <div className="container text--center">
        <div className="row">
          <div className="col">
            <Translate>Casnode is a forum developed by</Translate> <Link href="https://github.com/casnode/casnode"><Translate>the Casbin community</Translate></Link> <Translate>with a modern interface.</Translate>
            <br />
            <Translate>
              It comes with its own accounts and supports any OpenID Connect or OAuth 2.0 provider, so members can sign in with the account they already use.
            </Translate>
          </div>
          {
            isMobile === "mobile" ||
            <div className={styles.loginwindow}>
              <BrowserWindow>
                <div className={styles.loginiframediv}>
                  <CasnodeCard width="870px" height="720px"
                    src="https://demo.casnode.com/login"
                  />
                </div>
              </BrowserWindow>
            </div>
          }
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
          <div className="col">
            <font size="6" color="red">
              你好
            </font>&nbsp;<font size="6" color="grey">Hello</font>&nbsp;<font size="6" color="green">Bonjour</font><br /> <font size="6" color="blue">こんにちは</font> <font size="6" color="yellow">안녕하세요</font> <font size="6" color="purple">Hallo</font><br /><font size="6" color="orange">привет</font>
            <br />
            <Translate>
              The interface is available in English and Chinese, with a light and dark theme and a layout that works on phones.
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
      title={"Casnode · Open-source forum with the look of Discourse, built with Go and Next.js"}
      description="An open-source forum with the look and features of Discourse, built with Go and Next.js.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LoginContent />
        <LanguageContent />
      </main>
    </Layout>
  );
}
