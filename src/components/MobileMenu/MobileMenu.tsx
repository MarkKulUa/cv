import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../auth/firebase';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store';
import { selectAuth } from '../../store/auth';
import { ReactComponent as Logo } from '../../assets/svg/graphql.svg';
import styles from './MobileMenu.module.scss';
import { useOutsideClickDetector } from '../../hooks/layout';
import { MobileMenuContext } from '../../App';

export function MobileMenu() {
  const { isAuth, email } = useAppSelector(selectAuth);
  const { t } = useTranslation();
  const ref = useRef<HTMLElement | null>(null);
  const { isOpen, setOpenMobileMenu } = useContext(MobileMenuContext);
  useOutsideClickDetector(ref, () => setOpenMobileMenu(false));

  return (
    <menu ref={ref} className={`${styles.menuMobile} ${!isOpen ? '' : styles.open}`}>
      <div className={styles.mobileNavWrapper}>
        <div className={styles.logoContainer} onClick={() => setOpenMobileMenu(false)}>
          <Logo className={styles.logo} />
          <span>
            <Link className={styles.homeNav} to="/">
              GraphiQL
            </Link>
          </span>
        </div>
        <nav className={`${styles.NavigationLayout} ${styles.BaseLayout}`}>
          {isAuth && (
            <Link className={styles.mainNav} to="/main" onClick={() => setOpenMobileMenu(false)}>
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
              <Link className={styles.auth} to="/sign-in" onClick={() => setOpenMobileMenu(false)}>
                {t('Sign In')}
              </Link>
              <Link className={styles.auth} to="/sign-up" onClick={() => setOpenMobileMenu(false)}>
                {t('Sign Up')}
              </Link>
            </div>
          )}
        </div>
      </div>
    </menu>
  );
}
