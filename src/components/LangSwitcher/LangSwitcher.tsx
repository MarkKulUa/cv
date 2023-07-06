import React from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE, LOCALES } from '../../constants';
import styles from './LangSwitcher.module.scss';
import { Select } from '../UI/langSelect/select';

export function LangSwitcher() {
  const { i18n } = useTranslation();

  const switchLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.langSwitcherLayout}>
      <Select
        options={Object.keys(LOCALES)}
        onChange={switchLang}
        defaultValue={i18n.language || DEFAULT_LANGUAGE}
      />
    </div>
  );
}
