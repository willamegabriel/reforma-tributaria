import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
  title: string;
  description: React.ReactNode;
  image: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Configuração do IBS',
    image: 'img/custom/ibs-config.png',
    description: (
      <>
        Aprenda a configurar corretamente o IBS em todas as telas e parâmetros do sistema.
      </>
    ),
  },
  {
    title: 'Configuração do CBS',
    image: 'img/custom/cbs-config.png',
    description: (
      <>
        Guia completo passo a passo para garantir cálculos precisos e regras válidas.
      </>
    ),
  },
  {
    title: 'Suporte e Casos Reais',
    image: 'img/custom/support.png',
    description: (
      <>
        Exemplos práticos com cenários reais para auxiliar o suporte no atendimento.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  const imgUrl = useBaseUrl(image);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
