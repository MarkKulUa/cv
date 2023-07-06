import React from 'react';
import styles from './Card.module.scss';
import { ICardFeature } from 'types';
import { useTranslation } from 'react-i18next';
import { resizedImgFeature, resizedTextFeature } from '../../constants';

export const CardFeature = ({ img, featureName }: ICardFeature) => {
  const { t } = useTranslation();
  return (
    <div className={styles.Card}>
      <div className={styles.imgContainer}>
        <img
          src={img}
          className={resizedImgFeature.includes(featureName) ? styles.resizeImg : ''}
          alt={t('feature') || 'feature'}
        />
      </div>
      <p
        className={`${styles.featureName} ${
          resizedTextFeature.includes(featureName) ? styles.resizeText : ''
        }`}
      >
        {featureName}
      </p>
    </div>
  );
};
