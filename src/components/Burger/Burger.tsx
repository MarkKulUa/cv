import React from 'react';
import styles from './Burger.module.scss';

export function Burger() {
  return (
    <menu className={styles.burger}>
      <span className={styles.burgerMenu}></span>
      <span className={styles.burgerMenu}></span>
      <span className={styles.burgerMenu}></span>
    </menu>
  );
}
