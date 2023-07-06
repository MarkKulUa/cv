import React from 'react';
import styles from './AuthorBlock.module.scss';
import { useTranslation } from 'react-i18next';

interface IAuthor {
  photo: string;
  description: string;
  name: string;
  social: string;
}

export const AuthorBlock = ({ photo, description, name, social }: IAuthor) => {
  const { t } = useTranslation();
  return (
    <div className={styles.authorWrapper}>
      <div className={styles.outBlock}></div>
      <div className={styles.innerBlock}>
        <div className={styles.devPhotoWrapper}>
          <img
            src={photo}
            alt={t('developer image') || 'developer image'}
            className={styles.devPhoto}
          />
        </div>
        <div className={styles.devTextInfo}>
          <div className={styles.nameAndSocial}>
            <p className={styles.devName}>{name}</p>
            <a
              href={social}
              className={styles.devContact}
              target="_blank"
              title={t('Social Contact') ?? 'Social Contact'}
              rel="noreferrer"
            >
              {t('Contact')}
            </a>
          </div>
          <p className={styles.devDescription}>{t(description)}</p>
        </div>
      </div>
    </div>
  );
};
