import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import HeaderElement from '../HeaderElement/HeaderElement';
import styles from './Headers.module.scss';

const Headers = () => {
  const { addHeader, setHeaders, deleteHeader, updateHeader } = useActions();
  const { headers } = useAppSelector((state) => state.graphQl);
  const { t } = useTranslation();

  const handleAddHeader = () => {
    addHeader(['', '']);
  };

  const handleDeleteHeaders = () => {
    setHeaders([]);
  };

  const handleDeleteHeader = (key: string) => {
    deleteHeader(key);
  };

  const handleHeaderEdit = (id: string, key: string, value: string) => {
    updateHeader({ id, key, value });
  };

  return (
    <div className={styles.headersContent}>
      <ul className={styles.contentUl}>
        {headers.map((header, index) => (
          <HeaderElement
            key={header.id}
            last={index === headers.length - 1 && true}
            data={header}
            removeItem={handleDeleteHeader}
            updateItem={handleHeaderEdit}
          />
        ))}
      </ul>
      <div className={styles.buttonsContainer}>
        <button className={styles.btn} onClick={handleAddHeader}>
          {t('Add')}
        </button>
        <button className={styles.btn} onClick={handleDeleteHeaders}>
          {t('Delete All')}
        </button>
      </div>
    </div>
  );
};

export default Headers;
