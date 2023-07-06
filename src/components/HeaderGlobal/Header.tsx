import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { logout } from '../../auth/firebase';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { ReactComponent as Logo } from '../../assets/svg/graphql.svg';
import { useScrollDirection } from '../../hooks/layout';
import { useAppSelector } from '../../store';
import { selectAuth } from '../../store/auth';
import { Burger } from '../Burger/Burger';
import { MobileMenuContext } from '../../App';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  const scrollDirection = useScrollDirection();
  const { isAuth, email } = useAppSelector(selectAuth);
  const { t } = useTranslation();
  const { isOpen, setOpenMobileMenu } = useContext(MobileMenuContext);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMobileMenu(!isOpen);
  };

  return (
    <header className={`${scrollDirection === 'down' ? styles.hide : 'show'}`}>
      <div className={styles.contentWrapper}>
        <div
          className={`${styles.burgerWrap} ${isOpen ? styles.animation : ''}`}
          onClick={(e) => handleClick(e)}
        >
          <Burger />
        </div>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>
            <Link className={styles.homeNav} to="/">
              GraphiQL
            </Link>
          </span>
        </div>
        <nav className={`${styles.NavigationLayout} ${styles.BaseLayout}`}>
          {isAuth && (
            <Link className={styles.mainNav} to="/main">
              {t('Main')}
            </Link>
          )}
        </nav>
        <div className={styles.BaseLayout}>
          <div className={styles.languageContainer}>
            <LangSwitcher />
          </div>
          {isAuth ? (
            <>
              {email && (
                <div className={styles.welcome}>
                  {t('Welcome')} {email}!
                </div>
              )}
              <a className={styles.auth} onClick={() => logout()}>
                {t('logout')}
              </a>
            </>
          ) : (
            <div className={styles.authContainer}>
              <Link className={styles.auth} to="/sign-in">
                {t('Sign In')}
              </Link>
              <Link className={styles.auth} to="/sign-up">
                {t('Sign Up')}
              </Link>
            </div>
          )}
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};
