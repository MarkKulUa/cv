import React from 'react';
import { useGraphQLMutation } from '../../store/reducers/graphQlApi';
import { useAppSelector } from '../../hooks/redux';
import { Spinner } from '../Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import CodeMirror from '@uiw/react-codemirror';
import { lightTheme, initialSettings } from '../../consts/codemirror';
import { javascript } from '@codemirror/lang-javascript';
import styles from './Response.module.scss';

export default function Response() {
  const query = useAppSelector((state) => state.graphQl);
  const [requestGraphQl, { data, error, isError, isLoading }] = useGraphQLMutation();
  const { t } = useTranslation();

  const errorMsg = error && 'data' in error ? JSON.stringify(error.data, null, ' ') : '';

  const handleSubmit = () => {
    requestGraphQl(query);
  };

  return (
    <div className={styles.response}>
      <div className={styles.responseHeader}>
        <h1>{t('Response')}</h1>
        <button onClick={handleSubmit} className={styles.contentBtn}>
          {t('Send Request')}
        </button>
      </div>
      <div className={styles.responseContent}>
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <p>{errorMsg}</p>
        ) : data ? (
          <CodeMirror
            className={styles.responseData}
            value={JSON.stringify(data, null, ' ')}
            theme={lightTheme}
            extensions={[javascript()]}
            onChange={handleSubmit}
            basicSetup={initialSettings}
            editable={false}
          />
        ) : (
          <p className={styles.subText}>{t('Click Send Request to fetch data')}</p>
        )}
      </div>
    </div>
  );
}
