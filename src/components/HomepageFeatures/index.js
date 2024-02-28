import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '開発者フレンドリー',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        blastengineは開発者フレンドリーなメール配信サービスです
      </>
    ),
  },
  {
    title: 'APIとSMTPリレーをサポート',
    description: (
      <>
        blastengineはAPIとSMTPリレーをサポートしています。APIは一括配信、即時配信の二つの方法を提供しています。
      </>
    ),
  },
  {
    title: 'SDKは多数のプログラミング言語に対応',
    description: (
      <>
      SDKはPython、Ruby、PHP、Node.js、Java、Google Apps Scriptに対応しています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
