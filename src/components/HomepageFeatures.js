import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
          message: 'Easy to Use',
    }),
    Svg: require('../../static/img/model.svg').default,
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
          message: 'All kinds of DB and OSS',
    }),
    Svg: require('../../static/img/storage.svg').default,
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
          message: 'Multi-Language Support',
    }),
    Svg: require('../../static/img/language.svg').default,
    description: (
      <>
      <Translate>
      Now, Casnode supports Chinese and English UI. We use i18n to support multi-lang, so you can make a PR or an issue to support your language!
      </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
