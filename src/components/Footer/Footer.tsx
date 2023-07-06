import React from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <span>
          Copyright{' '}
          <a
            href="#"
            className={styles.githubLinkAuthor}
            title={t('Github Link Author') || 'Github Link Author'}
          >
            RC
          </a>
        </span>
        <a
          href="https://github.com/MarkKulUa/graphiql-app/pulls"
          className={styles.githubLink}
          title={t('GitHub repo') || 'GitHub repo'}
        >
          <span className={styles.githubLinkTarget}>GitHub</span> · 2023
        </a>
        <div className={styles.authorsLinks}>
          <a
            href="https://github.com/MarkKulUa"
            className={styles.githubLinkAuthor}
            title={'Mark ' + (t('GitHub repo') || 'GitHub repo')}
          >
            {t('Mark')}
          </a>
          <a
            href="https://github.com/alex5667"
            className={styles.githubLinkAuthor}
            title={'Alex ' + (t('GitHub repo') || 'GitHub repo')}
          >
            {t('Alex')}
          </a>
          <a
            href="https://github.com/HolyOly"
            className={styles.githubLinkAuthor}
            title={'Olga ' + (t('GitHub repo') || 'GitHub repo')}
          >
            {t('Olga')}
          </a>
        </div>
      </div>
    </footer>
  );
};
