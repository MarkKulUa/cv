import React, { useState, Suspense } from 'react';
import { Transition } from 'react-transition-group';
import { ReactComponent as DocIcon } from '../../assets/svg/doc.svg';
import { getSchemaDocumentation } from '../../apollo/client';
import { FieldInfo } from '../../types';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../Spinner/Spinner';
import { toast } from 'react-toastify';

import styles from './Documentation.module.scss';

const FieldsList = React.lazy(() => import('../FieldsList/FieldsList'));

const Documentation = () => {
  const [viewDocs, setViewDocs] = useState(false);
  const [fields, setFields] = useState<FieldInfo[] | string>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const isRootTypesSection = history.length === 0;

  const fetchSchemaData = async (type?: string) => {
    try {
      setIsLoading(true);
      const fetchedDocumentation = await getSchemaDocumentation(type);
      let filteredFields: FieldInfo[] | string = [];

      if (typeof fetchedDocumentation.fields === 'string') {
        filteredFields = fetchedDocumentation.fields;
      } else {
        filteredFields = fetchedDocumentation.fields || [];
      }
      setFields(filteredFields);
    } catch (error) {
      toast.error(t('Error while fetching schema data:') + error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldButtonClick = async (type: string) => {
    const lettersOnly = type.replace(/[^a-zA-Z]/g, '');
    setHistory([...history, type]);
    fetchSchemaData(lettersOnly);
  };

  const handleBackButton = async () => {
    const prevHistory = [...history];
    prevHistory.pop();
    setHistory(prevHistory);
    const prevType = prevHistory[prevHistory.length - 1];
    if (prevType) {
      await fetchSchemaData(prevType);
    } else {
      await fetchSchemaData();
    }
  };

  return (
    <div
      className={`${styles.documentation} ${
        viewDocs ? styles.documentationOpen : styles.documentationClose
      }`}
    >
      <button
        className={styles.documentationBtn}
        title={t('Documentations') || 'Documentations'}
        onClick={() => setViewDocs(!viewDocs)}
      >
        <DocIcon />
      </button>
      <Transition in={viewDocs} timeout={250} unmountOnExit>
        <div className={styles.transitionContent}>
          <h2 className={styles.title}>{t('Docs')}</h2>
          {isRootTypesSection ? (
            <>
              <div className={styles.subTitle}>
                {t('A GraphQL schema provides a root type for each kind of operation.')}
              </div>
              <strong>{t('Root Types')}</strong>
              <div className={styles.query}>
                {t('query')}:
                <button className={styles.btn} onClick={() => handleFieldButtonClick('Query')}>
                  {t('Query')}
                </button>
              </div>
            </>
          ) : (
            <Suspense fallback={<Spinner />}>
              {isLoading ? (
                <Spinner />
              ) : (
                <FieldsList
                  fields={fields}
                  handleFieldButtonClick={handleFieldButtonClick}
                  handleBackButton={handleBackButton}
                  history={history}
                />
              )}
            </Suspense>
          )}
        </div>
      </Transition>
    </div>
  );
};

export default Documentation;
