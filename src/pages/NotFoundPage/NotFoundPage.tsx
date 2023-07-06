import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { NUM_OF_PARTICLES, WELCOME_PAGE_PATH } from '../../constants';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {[...Array(NUM_OF_PARTICLES)].map((_e, i) => (
        <span className={styles.particle} key={i}>
          4
        </span>
      ))}
      {[...Array(NUM_OF_PARTICLES)].map((_e, i) => (
        <span className={styles.particle} key={i}>
          0
        </span>
      ))}
      <div className={styles.content}>
        <h2>{t('Page not found')}</h2>
        <Link to={WELCOME_PAGE_PATH} className={styles.auth}>
          {t('home')}
        </Link>
      </div>
    </div>
  );
};
