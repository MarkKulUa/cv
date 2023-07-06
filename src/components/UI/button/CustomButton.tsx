import React from 'react';
import { FC } from 'react';
import styles from './CustomButton.module.scss';

export interface IButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  name: string;
}

export const CustomButton: FC<IButtonProps> = ({ text, type }) => {
  return (
    <button type={type} className={styles.customBtn}>
      {text}
    </button>
  );
};
