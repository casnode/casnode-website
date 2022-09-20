import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";
import {useColorMode} from "@docusaurus/theme-common";

const FeatureList = [
  {
    title: translate({
      message: "Easy to Use",
    }),
    path: "/img/model",
    description: (
      <>
        <Translate>
        Only few steps to setup Casnode!
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "All kinds of DB and OSS",
    }),
    path: "/img/storage",
    description: (
      <>
        <Translate>
        Casnode supports many kinds of Databases and OSS provider. And you can add your own providers easily!
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      message: "Multi-Language Support",
    }),
    path: "/img/language",
    description: (
      <>
        <Translate>
      Now, Casnode supports Chinese and English UI. We use i18n to support multi-lang, so you can make a PR or an issue to support your language!
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
