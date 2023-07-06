import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import Variables from '../Variables/Variables';
import Headers from '../Headers/Headers';
import styles from './Tabs.module.scss';
import { useTranslation } from 'react-i18next';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('vars');
  const [showSection, setShowSection] = useState(true);
  const { t } = useTranslation();

  const handleShowSection = (tab: string) => {
    setActiveTab(tab);
    setShowSection(true);
  };

  return (
    <div className={styles.tabs} aria-expanded={showSection}>
      <div
        id="toggle-head"
        className={styles.tabsButtons}
        aria-expanded="true"
        aria-controls="toggle-body"
      >
        <button
          type="button"
          className={`${styles.btn} ${activeTab === 'vars' ? `${styles.active}` : ''}`}
          onClick={() => handleShowSection('vars')}
        >
          {t('Variables')}
        </button>
        <button
          type="button"
          className={`${styles.btn} ${activeTab === 'headers' ? `${styles.active}` : ''}`}
          onClick={() => handleShowSection('headers')}
        >
          {t('Headers')}
        </button>
      </div>
      <Transition
        in={showSection}
        timeout={250}
        mountOnEnter
        unmountOnExit
        classnames="tabs__transition"
        id="toggle-transition"
        aria-labelledby="toggle-head"
      >
        <div className={styles.headers}>
          {activeTab === 'vars' && (
            <div className={styles.tab}>
              <Variables />
            </div>
          )}
          {activeTab === 'headers' && (
            <div className={styles.tab}>
              <Headers />
            </div>
          )}
        </div>
      </Transition>
    </div>
  );
};

export default Tabs;
