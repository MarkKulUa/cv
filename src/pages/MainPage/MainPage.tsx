import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store';
import { selectAuth } from '../../store/auth';
import { Navigate } from 'react-router-dom';
import { WELCOME_PAGE_PATH } from '../../constants';
import { toast } from 'react-toastify';
import styles from './MainPage.module.scss';
import { Spinner } from '../../components/Spinner/Spinner';

const Documentation = React.lazy(() => import('../../components/Documentation/Documentations'));
const Editor = React.lazy(() => import('../../components/Editor/Editor'));
const Tabs = React.lazy(() => import('../../components/Tabs/Tabs'));
const Response = React.lazy(() => import('../../components/Response/Response'));

export const MainPage = () => {
  const { t } = useTranslation();
  const { isAuth } = useAppSelector(selectAuth);

  if (!isAuth) {
    toast.error(t('Access error') + '! ');
  }

  return (
    <>
      {!isAuth && <Navigate to={WELCOME_PAGE_PATH} />}
      {isAuth && (
        <div className={styles.mainPage}>
          <Suspense fallback={<Spinner />}>
            <Documentation />
            <div className={styles.editorContainer}>
              <Editor />
              <Tabs />
            </div>
            <Response />
          </Suspense>
        </div>
      )}
    </>
  );
};
