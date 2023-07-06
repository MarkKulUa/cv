import React from 'react';
import { type FC } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader}></div>
    </div>
  );
};
