import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Easy to Run",
    }),
    path: "/img/model",
    description: (
      <>
        <Translate>
        Download a release, run one binary, and the first account is the administrator. No Ruby, Redis or background queue.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Any Database",
    }),
    path: "/img/storage",
    description: (
      <>
        <Translate>
        Start with SQLite in a single file, or use MySQL, PostgreSQL or SQL Server. Uploads stay on your disk.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Built-in Accounts and SSO",
    }),
    path: "/img/language",
    description: (
      <>
        <Translate>
        Email and password accounts work out of the box, and any OpenID Connect or OAuth 2.0 provider can be added in the admin area.
        </Translate>
      </>
    ),
  },
];

function Feature({title, path, description}) {
  const {colorMode} = useColorMode();
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={colorMode === "light" ? path + ".png" : path + "-dark.png"} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
