import React from 'react';
import { FieldInfo } from '../../types';
import { useTranslation } from 'react-i18next';
import styles from './FieldList.module.scss';
import { Spinner } from '../Spinner/Spinner';
const FieldComponent = React.lazy(() => import('../FieldComponent/FieldComponent'));

type Props = {
  fields: FieldInfo[] | string;
  handleFieldButtonClick: (type: string) => void;
  handleBackButton: () => void;
  history: string[];
};

const FieldsList: React.FC<Props> = ({
  fields,
  handleFieldButtonClick,
  handleBackButton,
  history,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <button onClick={handleBackButton} className={styles.backBtn}>
        {t('Back')}
      </button>
      <div className={styles.typeContainer}>
        <div className={styles.title}>{t('TYPE')}:</div>
        {history.length > 0 && (
          <div className={styles.selectedType}>{history[history.length - 1]}</div>
        )}
      </div>
      {typeof fields === 'string' ? (
        <div>{fields}</div>
      ) : (
        <>
          <div className={styles.title}>{t('FIELDS')}:</div>
          <div className={styles.fieldList}>
            {fields.map((field: FieldInfo, index: number) => (
              <React.Suspense fallback={<Spinner />} key={index}>
                <FieldComponent field={field} handleFieldButtonClick={handleFieldButtonClick} />
              </React.Suspense>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FieldsList;
