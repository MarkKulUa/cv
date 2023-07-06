import React from 'react';
import { Login } from '../../components/Auth/Login';
import { useAppSelector } from '../../store';
import { selectAuth } from '../../store/auth';
import { MAIN_PAGE_PATH } from '../../constants';
import { Navigate } from 'react-router-dom';
import styles from '../BasePageStyles.module.scss';

export const LoginPage = () => {
  const { isAuth } = useAppSelector(selectAuth);

  return (
    <div className={styles.authPageContainer}>
      {isAuth && <Navigate to={MAIN_PAGE_PATH} />}
      {!isAuth && <Login />}
    </div>
  );
};
